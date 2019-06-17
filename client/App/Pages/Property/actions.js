import axios from 'axios';
import moment from 'moment';
import objectAssign from 'object-assign';

export const GET_PROPERTY_DETAILS = 'GET_PROPERTY_DETAILS';

export const GET_DETAILS_SUCCESS = 'GET_DETAILS_SUCCESS';

export const GET_DETAILS_FAIL = 'GET_DETAILS_FAIL';

export function requestPropertyDetails(slug) {
  return {
    types: [
      GET_PROPERTY_DETAILS,
      GET_DETAILS_SUCCESS,
      GET_DETAILS_FAIL
    ],
    payload: {
      promise: getPropertyDetails(slug)
    }
  }
  // return dispatch => {
  //   type: GET_PROPERTY_DETAILS,
  //   payload: {
  //     promise: requestPropertyDetails(slug)
  //   },
  //   slug
  // }
};

export function getPropertyDetails(slug) {
//  return dispatch => {
    return axios.get('/api/property/' + slug).then((response) => {
      console.log(response);
      return response.data;
    });
//  };
};

export function getDetailsSuccess(data) {
  console.log('getDetailsSuccess');
  console.log(data);
  const property = buildPropertyObj(data);
  return {
    type: GET_DETAILS_SUCCESS,
    property
  };
};

export function getDetailsFail(error) {
  return {
    type: GET_DETAILS_FAIL,
    error
  };
};

function buildPropertyObj(raw) {
  const property = parseData( raw.data[0], raw.included );
  return objectAssign({}, property, parseIncluded( raw.included, property.policies ) );
};

function parseData ({ attributes, relationships }, included) {

  return {
    name: attributes.name,
    image: attributes.image_url,
    images: arrayBuilder(included, 'image'),
    tags: arrayBuilder(included, 'tag'),
    displayAddress: attributes.display_address,
    fullAddress: attributes.full_address,
    minDuration: attributes.min_duration,
    coord: [ attributes.lat, attributes.lng ],
    freebies: arrayBuilder(included, 'amenity').filter(filterFreebies),
    policies: arrayBuilder(included, 'policy')
  };

  function arrayBuilder(included, type) {
    return included.filter(obj => obj.type === type);
  };

  function filterFreebies(obj) {
    return obj.attributes.included === 1;
  };
};

function parseIncluded ( included, propertyPolicies ) {
  const flipIntervalObj = propertyPolicies.find(policy => policy.attributes.name === 'flip_interval');
  const flipInterval = flipIntervalObj ? (flipIntervalObj.attributes.units === 'hours') ? parseInt(flipIntervalObj.attributes.value) : parseInt(flipIntervalObj.attributes.value)/60 : 0;
  let propertyDetails = [];
  let amenities = [];
  let rooms = [];
  let blockedTimes = [];
  let operationTimes = [];
  let policies = [];
  let ratePlans = [];

  included.forEach( pushAccordingToType );
  blockedTimes = blockedTimes.filter(removePassedTimes);
  amenities.forEach(addPolicies);
  rooms.forEach(addAmenities);
  rooms.forEach(addBlockedTimes);
  rooms.forEach(addPolicies);
  rooms.forEach(addRatePlans);
  rooms.forEach(checkOpTimes);
  // add blocked times based on closed days here
  rooms.forEach(checkForClosedDays);
  rooms.forEach(addBlackoutDates);

  return objectAssign({}, stripPropertyDetails( propertyDetails[0].attributes ), { amenities, rooms, operationTimes, flipInterval });

  function addBlackoutDates( room ) {
    const minDuration = room.attributes.min_duration/60;
    const minMeetingTime = flipInterval + minDuration;
    const operationTimes = room.attributes.operation_times;
    const blockedTimes = room.blockedTimes;
    room.blackoutDates = [];
    room.meetingTimes = [];

    // this will push to blackoutDates
    // need to add case for blockedTime that spans multiple dates
    // compare the start and end dates then add both to blackoutDates
    blockedTimes.forEach(blockedTime => {
      const dayOfWeek = moment(blockedTime.attributes.start.date).format('ddd').toLowerCase();
      const startDate = moment(blockedTime.attributes.start.date);
      const endDate = moment(blockedTime.attributes.end.date);
      const operationHours = operationTimes.find(operationTime => operationTime.day === dayOfWeek);
      const openTime = moment(operationHours.open_time, 'HH:mm').year(startDate.year()).month(startDate.month()).date(startDate.date());
      const closeTime = moment(operationHours.close_time, 'HH:mm').year(endDate.year()).month(endDate.month()).date(endDate.date());
      let startDiffTime = 0;
      let endDiffTime = 0;
      let meetingTimeDiff = 0;
      let meetingDuration = 0

      // use the max meeting duration to figure out if this spans more than a few days
      if (operationHours) {
        meetingTimeDiff = startDate.diff(endDate, 'days');
        meetingDuration = startDate.diff(endDate, 'hours');
        // console.log(`Meeting time difference is ${meetingTimeDiff} days and id is ${blockedTime.id}`);
        startDiffTime = startDate.diff(openTime, 'hours');
        endDiffTime = closeTime.diff(endDate, 'hours');

        if ( meetingTimeDiff < 1 ) {
          if ( startDate.format('YYYY-MM-DD') !== endDate.format('YYYY-MM-DD') ) {
            // console.log('different dates push push', startDate.format('YYYY-MM-DD'));
            room.blackoutDates.push(startDate);
            if ( minMeetingTime > endDiffTime ) {
              // console.log('end date push', endDate.format('YYYY-MM-DD'));
              room.blackoutDates.push(endDate);
            } else {
              let a = 'remove me';
              // MIGI TODO: need a way to block the time for the next day
            }
          } else {
            if ( minMeetingTime > startDiffTime && minMeetingTime > endDiffTime ) {
              // console.log('push push push', startDate.format('YYYY-MM-DD'));
              room.blackoutDates.push(startDate);
            } else {
              room.meetingTimes.push( stripBlockedTime(blockedTime) );
            }
          }
        } else {
          let b = 'remove me';
          // MIGI TODO: if it spans multiple days
        }
      }
    });

    function stripBlockedTime(blockedTime) {
      return {
        id: blockedTime.id,
        roomId: blockedTime.attributes.room_id,
        startTime: moment(blockedTime.attributes.start.date),
        endTime: moment(blockedTime.attributes.end.date)
      };
    };
  };

  function checkForClosedDays( room ) {
    const daysOfOperation = room.attributes.operation_times.map(opTime => opTime.day);
    const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

    // if operation time is missing
    if ( daysOfOperation.length < 7 ) {
      console.log("here we're going to push the missing operation times", daysOfOperation);
      // identify missing days and add them
      let missingDays = days.filter( day => !daysOfOperation.includes(day) );
      missingDays.forEach( createAndPushOpTime );

      // create blockedtimes for closed days
      let currentDay = moment();
      for ( let i=0; i < 30; i++ ) {
        if ( missingDays.includes( currentDay.format('ddd').toLowerCase() ) ) {
          room.blockedTimes.push( createBlockedTime( currentDay, i ) );
        }

        currentDay.add(1, 'days');
      }
    }

    function createAndPushOpTime( day ) {
      const missingOperationTime = {
        day,
        open_time: '08:00',
        close_time: '08:00'
      };

      return room.attributes.operation_times.push(missingOperationTime);
    }

    function createBlockedTime( currentDay, i ) {
      let openHour = parseInt(room.attributes.operation_times[0].open_time.split(':')[0]);
      let closeHour = parseInt(room.attributes.operation_times[0].close_time.split(':')[0]);
      let id = `${i}`;
      if ( i && i < 10 ) id += '0' + id;
      return {
        id,
        attributes: {
          room_id: room.room_id,
          start: {
            date: currentDay.hour(openHour).format() //open time
          },
          end: {
            date: currentDay.hour(closeHour).format() //close time
          }
        }
      }
    }
  }

  function pushAccordingToType ( value ) {
    switch ( value.type ) {
      case 'propertyDetails':
        return propertyDetails.push(value);
      case 'amenity':
        return amenities.push(value);
      case 'room':
        return rooms.push(value);
      case 'blockedtime':
        return blockedTimes.push(value);
      case 'policy':
        return policies.push(value);
      case 'rateplan':
        return ratePlans.push(value);
      default:
        return;
    }
  };

  function stripPropertyDetails( attributes ) {
    return {
      deckline: attributes.deckline,
      description: attributes.description,
      execSummary: attributes.executive_summary
    };
  };

  // REFACTOR TODO MIGI: find a way to make this into a reusable function with addBlockedTimes & addPolicies when there is time
  function addAmenities( room ) {
    const roomAmenityIds = room.relationships.amenities.data.map(listIds);
    room.amenities = amenities.filter(funnelAmenities);

    function funnelAmenities ( amenity ) {
      if ( roomAmenityIds.includes( amenity.id ) && amenity.attributes.included === 0 ) return true;
    };
  };

  function addBlockedTimes( room ) {
    const blockedTimeIds = room.relationships.blockedTimes.data.map(listIds);
    room.blockedTimes = blockedTimes.filter(funnelBlockedTimes);

    function funnelBlockedTimes( blockedTime ) {
      if ( blockedTimeIds.includes( blockedTime.id ) ) return true;
    };
  };

  function addPolicies( room ) {
    const policyIds = room.relationships ? room.relationships.policies.data.map(listIds) : [];
    room.policies = policies.filter(funnelPolicies);

    function funnelPolicies( policy ) {
      if ( policyIds.includes( policy.id ) ) return true;
    }
  };

  function addRatePlans( room ) {
    const ratePlanIds = room.relationships.ratePlans.data.map(listIds);
    room.ratePlans = ratePlans.filter(funnelRatePlans);

    function funnelRatePlans( ratePlan ) {
      if ( ratePlanIds.includes( ratePlan.id) ) return true;
    }
  }

  function listIds( obj ) {
    return obj.id;
  }

  function removePassedTimes( block ) {
    if ( moment().isAfter( moment(block.attributes.start.date) ) ) return false;
    return true;
  };

  function checkOpTimes( room ) {
    room.attributes.operation_times.forEach(findEarliestLatestOpTimes);

    function findEarliestLatestOpTimes( value ) {
      if ( operationTimes.length < 1 ) {
        operationTimes.push( moment(value.open_time, 'H:mm'), moment(value.close_time, 'H:mm') );
        return;
      }

      const newOpenTime = moment(value.open_time, 'H:mm');
      const newCloseTime = moment(value.close_time, 'H:mm');

      if ( operationTimes[0].isAfter(newOpenTime) ) {
        operationTimes.splice(0, 1, newOpenTime);
      }

      if ( newCloseTime.isAfter(operationTimes[1]) ) {
        operationTimes.splice(1, 1, newCloseTime);
      }
    }

  };
};
