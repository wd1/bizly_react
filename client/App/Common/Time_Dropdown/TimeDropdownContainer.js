import { connect } from 'react-redux';
import moment from 'moment';
import { selectTime } from './TimeDropdownActions';
import TimeDropdown from './TimeDropdown';

// find every match in BTs for the selected date
// if there is no time available, put no time available
// calculate for flip interval
const mapStateToProps = (state, ownProps) => {
  const defaultOperationTimes = [{
    day: state.Search.search.date.format('ddd').toLowerCase(),
    open_time: '07:00',
    close_time: '20:00'
  }];

  const pdp = ownProps.pdp;

  const date = state.Search.search.date;

  const selectedRoom = state.PropertyDetails.selectedRoom;

  const meetingTimes = selectedRoom.meetingTimes;

  const meetingTimesForDate = meetingTimes.filter( meeting => date.format('YYYY-MM-DD') === meeting.startTime.format('YYYY-MM-DD') );
  // console.log('these are the meetings for the day');
  // meetingTimesForDate.forEach(meeting => console.log(`Meeting is from ${meeting.startTime.format('hh:mm a')} to ${meeting.endTime.format('hh-mm a')}`));

  const flipInterval = state.PropertyDetails.property.flipInterval;

  const minLeadTime = selectedRoom.minLeadTime;

  const minDuration = selectedRoom.attributes.min_duration/60;

  const allOperationTimes = selectedRoom.attributes.operation_times || defaultOperationTimes;

  const dayOfWeek = date.format('ddd').toLowerCase();

  const currentDayOperationTimes = allOperationTimes.filter(pickDayOfWeek)[0];

  const options = pdp ? createOptions() : defaultOptions();
  // handle when selected is disabled
  return {
    time: state.Search.search.time,
    options,
    isHomepage: ownProps.isHomepage,
    propStyles: ownProps.listingSearchStyles
  };

  // REFACTOR: OBVIOUSLY
  function defaultOptions() {
    let options = [];
    let nextAvailable = createDefaultTime();

    const openTime = moment(defaultOperationTimes[0].open_time, 'H:mm');
    const closeTime = moment(defaultOperationTimes[0].close_time, 'H:mm');
    const hoursOfOperation = closeTime.diff(openTime, 'hours');

    const isDateToday = state.Search.search.date.format('YYYY-MM-DD') === moment().format('YYYY-MM-DD');

    for (let val = 0; val < hoursOfOperation; val++) {
      let disabled = disableOption();
      options.push( createOptionObject(openTime.format('hh:mm a'), disabled) );

      openTime.add(0.5, 'hours');
      disabled = disableOption();
      options.push( createOptionObject(openTime.format('hh:mm a'), disabled) );

      openTime.add(0.5, 'hours');
    }

    return options;

    function createDefaultTime() {
      const nextAvailable = moment().add(1, 'hours');

      if ( nextAvailable.minutes() < 30 ) {
        return nextAvailable.minutes(30);
      } else {
        return nextAvailable.add(1, 'hours').minutes(0);
      }
    };

    function disableOption() {
      return isDateToday && ( nextAvailable.hour() !== openTime.hour() ) ? nextAvailable.isAfter(openTime) : false;
    }
  }

  function createOptions() {
    let options = [];

    const openTime = minLeadTime ? moment(currentDayOperationTimes.open_time, 'H:mm').year( parseInt(minLeadTime.format('YYYY')) ).month( parseInt(minLeadTime.format('M')) - 1 ).date( parseInt(minLeadTime.format('D')) ) : moment(currentDayOperationTimes.open_time, 'H:mm');
    const closeTime = minLeadTime ? moment(currentDayOperationTimes.close_time, 'H:mm').year( parseInt(minLeadTime.format('YYYY')) ).month( parseInt(minLeadTime.format('M')) - 1 ).date( parseInt(minLeadTime.format('D')) ) : moment(currentDayOperationTimes.close_time, 'H:mm');
    const hoursOfOperation = closeTime.diff(openTime, 'hours') - minDuration;

    meetingTimesForDate.sort(sortMeetingTimes);
    let currentMeetingIndex = 0
    let currentMeeting = meetingTimesForDate[currentMeetingIndex];
    // console.log('current meeting', currentMeeting)
    let incrementMeeting = false;

    for (let val = 0; val <= hoursOfOperation; val++) {
      let disabled = false;

      if ( meetingTimesForDate.length > 0 ) {
        if ( meetingTimesForDate.length > 1 ) {
          if ( incrementMeeting ) {
            incrementMeeting = false;
            currentMeeting = meetingTimesForDate[currentMeetingIndex];
          }
        }
      }

      disabled = shouldBeDisabled(date, minLeadTime, openTime);

      // console.log(`just the hours ${openTime.hours()} ${openTime.minutes()}`);
      options.push( createOptionObject( openTime.format('hh:mm a'), disabled ) );

      openTime.add(0.5, 'hours');

      if ( incrementMeeting ) {
        incrementMeeting = false;
        currentMeeting = meetingTimesForDate[currentMeetingIndex];
      }

      disabled = shouldBeDisabled(date, minLeadTime, openTime);
      // console.log(`incremented hours ${openTime.hours()} ${openTime.minutes()}`);
      options.push( createOptionObject( openTime.format('hh:mm a'), disabled ) );
      openTime.add(0.5, 'hours');
    }

    options.pop();

    return options;

    function sortMeetingTimes( blockA, blockB ) {
      return blockA.startTime.hours() - blockB.startTime.hours();
    }

    function shouldBeDisabled(date, minLeadTime, openTime) {
      let disabled = false;
      let currentTime = (openTime.hours() * 100) + openTime.minutes();
      let startTime;
      let endTime;
      if ( date.format('YYYY-MM-DD') === minLeadTime.format('YYYY-MM-DD') && minLeadTime.isAfter(openTime) ) disabled = true;

      if ( currentMeeting ) {
        startTime = (currentMeeting.startTime.hours() - (flipInterval + minDuration) ) * 100;
        endTime = (currentMeeting.endTime.hours() + flipInterval) * 100;
        // console.log(`time: ${currentTime} \n start: ${startTime} \n end: ${endTime}`);
        if ( currentTime > startTime && currentTime < endTime ) disabled = true;

        if ( currentTime >= endTime ) {
          // console.log('increment');
          currentMeetingIndex++;
          incrementMeeting = true;
        }
      }

      return disabled;
    }
  };

  function createOptionObject(time, disabled) {
    return { time, disabled };
  };

  function pickDayOfWeek(day) {
    if ( dayOfWeek === day.day ) return true;
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectTime: (time, isHomepage) => dispatch(selectTime(time, isHomepage))
  };
};

const TimeDropdownContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeDropdown);

export default TimeDropdownContainer;