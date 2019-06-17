import { connect } from 'react-redux';
import { getUserReservations } from './actions';
import MyReservations from './index';

// reservation fetching logic will be here
const mapStateToProps = (state) => {
  return {
    reservations: state.Reservations.reservations,
    loggedIn: state.Login.loggedIn,
    userId: state.Login.info.id,
    fetching: state.Reservations.fetchingReservations,
    fetched: state.Reservations.reservationsFetched,
    attempts: state.Reservations.fetchAttempts,
    checkingLogin: state.Login.checkingLogin,
    loginCheck: state.Login.loginCheck
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getReservations: (id) => dispatch( getUserReservations(id) )
  };
};

const MyReservationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyReservations);

export default MyReservationsContainer;