import { connect } from 'react-redux';
import moment from 'moment';
import { pickDate } from './BizDatePickerActions';
import BizDatePicker from './BizDatePicker';

const mapStateToProps = (state, ownProps) => {
  const pdp = ownProps.pdp;
  const isModal = ownProps.isModal;
  let minLeadTime = state.PropertyDetails.selectedRoom.minLeadTime; // actually minimum date based on lead time
  // console.log(`The min date is ${minLeadTime.format('YYYY-MM-DD')}`);
  const date = state.Search.search.date;
  const blackoutDates = pdp ? state.PropertyDetails.selectedRoom.blackoutDates : [];
  const shouldChangeBlackoutDate = pdp ? blackoutDates.filter(findBlackoutDate).length > 0 : false;
  const shouldChangeWithMinLeadTime = pdp ? minLeadTime.isAfter(date) : false;
  const changeDate = shouldChangeBlackoutDate || shouldChangeWithMinLeadTime;
  // console.log('all blacked out dates', blackoutDates);

  if ( shouldChangeBlackoutDate ) {
    minLeadTime = date.clone().add(1, 'days');
  }
  return {
    minLeadTime,
    date,
    propStyles: ownProps.listingSearchStyles,
    pdp,
    changeDate,
    isModal,
    isHomepage: ownProps.isHomepage,
    blackoutDates
  };

  function findBlackoutDate(blackoutDate) {
    return date.format('YYYY-MM-DD') === blackoutDate.format('YYYY-MM-DD');
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    pickDate: (date, isPDP) => dispatch(pickDate(date, isPDP))
  };
};

const BizDatePickerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BizDatePicker);

export default BizDatePickerContainer;