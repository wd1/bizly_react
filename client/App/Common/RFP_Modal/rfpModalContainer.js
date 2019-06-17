import { connect } from 'react-redux';
import { rfpToggle } from '../Search_Form/actions';
import RfpModal from './rfpModal';

// const fields = ['name', 'email', 'company', 'phone', 'location', 'date', 'time', 'guests'];

const mapStateToProps = (state) => {
  return {
    location: state.Search.search.location,
    date: state.Search.search.date,
    time: state.Search.search.time,
    guests: state.Search.search.guests,
    rfp: state.Search.rfpModal
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideModal: () => dispatch( rfpToggle() ),
    submit: () => console.log('submit works')
  };
};

// const formConfig = {
//   form: 'rfp',
//   fields
// };

const RfpModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RfpModal);

export default RfpModalContainer;