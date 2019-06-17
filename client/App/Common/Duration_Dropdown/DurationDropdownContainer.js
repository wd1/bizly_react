import { connect } from 'react-redux';
import moment from 'moment';
import { selectDuration } from './DurationDropdownActions';
import DurationDropdown from './DurationDropdown';

// check how this will be affected by time dropdown
const mapStateToProps = (state, ownProps) => {
  const defaultOperationTimes = [{
    day: state.Search.search.date.format('ddd').toLowerCase(),
    open_time: '07:00',
    close_time: '20:00'
  }];

  const pdp = ownProps.pdp;

  const date = state.Search.search.date;

  const dayOfWeek = date.format('ddd').toLowerCase();

  const operationTimes = state.PropertyDetails.selectedRoom.attributes.operation_times || defaultOperationTimes;

  const currentDayOperationTimes = operationTimes.filter(pickDayOfWeek)[0];

  const meetingTimesForDate = state.PropertyDetails.selectedRoom.meetingTimes.filter( meeting => date.format('YYYY-MM-DD') === meeting.startTime.format('YYYY-MM-DD') );

  const flipInterval = state.PropertyDetails.property.flipInterval;

  const selectedTime = state.Search.search.time ? moment(state.Search.search.time, 'hh:mm a') : moment(currentDayOperationTimes.open_time, 'HH:mm');

  const selectedTimeMoment = selectedTime.month(date.month()).date(date.date());

  let maxDuration = calculateMaxDuration(currentDayOperationTimes.close_time, selectedTimeMoment);

  if ( meetingTimesForDate.length > 0 ) {
    let meetingTimeStartTimeDiffs = meetingTimesForDate.map(meeting => {
      return meeting.startTime.subtract(flipInterval, 'hours').diff( selectedTimeMoment, 'hours');
    });

    let smallestDiff = 12;

    let nextMeetingIndex = 0;

    meetingTimeStartTimeDiffs.forEach( (meetingDiff, index) => {
      if ( smallestDiff > meetingDiff && meetingDiff > 0 ) {
        smallestDiff = meetingDiff;
        nextMeetingIndex = index;
      }
    });
    maxDuration = meetingTimeStartTimeDiffs[nextMeetingIndex];
  }

  const minDuration = state.PropertyDetails.property.minDuration/60 || 1;

  const options = createOptions();
  // handle when selected is disabled
  return {
    options,
    minDuration,
    duration: state.Search.search.duration,
    propStyles: ownProps.listingSearchStyles
  };

  function createOptions() {
    let options = [];

    const openTime = pdp ? moment(currentDayOperationTimes.open_time, 'H:mm') : moment(defaultOperationTimes.open_time, 'H:mm');
    const closeTime = pdp ? moment(currentDayOperationTimes.close_time, 'H:mm') : moment(defaultOperationTimes.close_time, 'H:mm');
    const hoursOfOperation = closeTime.diff(openTime, 'hours');

    for (let val = minDuration; val <= hoursOfOperation; val++) {
      let disabled = val > maxDuration;

      options.push( createOptionObject(val, disabled) );
      if ( val !== hoursOfOperation ) {
        disabled = val + 0.5 > maxDuration;
        options.push( createOptionObject(val + 0.5, disabled) );
      }
    }

    return options;

    function createOptionObject(duration, disabled) {
      return { duration, disabled };
    }
  };

  function pickDayOfWeek(day) {
    if ( dayOfWeek === day.day ) return true;
  };

  function calculateMaxDuration( closeTime, time ) {
    const closing = moment(closeTime, 'H:mm').month(time.month()).date(time.date());

    return closing.diff(time, 'hours');
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectDuration: (duration) => dispatch(selectDuration(duration))
  };
};

const DurationDropdownContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DurationDropdown);

export default DurationDropdownContainer;