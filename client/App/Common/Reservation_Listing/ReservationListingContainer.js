import { connect } from 'react-redux';
import ReservationListing from './ReservationListing';


const mapStateToProps = (state, ownProps) => {
  return {
    reservation: ownProps.reservation
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const ReservationListingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReservationListing);

export default ReservationListingContainer;