import objectAssign from 'object-assign';
import { ORDER_PROCESSED } from '../Checkout/actions';

import { 
  CONFIRMATION_TOGGLE,
  INVITATIONS_SENDING, 
  INVITATIONS_SENT, 
  INVITATIONS_ERROR, 
  CLOSE_INVITATION_SENT_MODAL,
  UPDATE_MEETING_DESCRIPTION } from '../../Common/Invite_Guests/InviteGuestsActions';

import { 
  GETTING_RESERVATIONS, 
  RECEIVED_RESERVATIONS, 
  RESERVATIONS_FETCH_ERROR } from './actions';

//TODO MIGI remove and reset on logout
const reservationsInitialState = {
  inviteConfirmation: false,
  fetchingReservations: false,
  reservationsFetched: false,
  fetchAttempts: 0,
  reservations: [],
  error: {}
};

const Reservations = (state = reservationsInitialState, action) => {
  switch (action.type) {
    case CLOSE_INVITATION_SENT_MODAL:
      return objectAssign({}, state, {inviteConfirmation: false});
    case INVITATIONS_SENDING:
      return objectAssign({}, state);
    case INVITATIONS_SENT:
      return objectAssign({}, state, {inviteConfirmation: true});
    case INVITATIONS_ERROR:
      return objectAssign({}, state, {inviteConfirmation: false});
    case UPDATE_MEETING_DESCRIPTION:
      return objectAssign({}, state);
    case CONFIRMATION_TOGGLE:
      return objectAssign({}, state, {inviteConfirmation: !state.inviteConfirmation});
    case GETTING_RESERVATIONS:
      return objectAssign({}, state, {fetchingReservations: true});
    case RECEIVED_RESERVATIONS:
      return objectAssign({}, state, {fetchingReservations: false, fetchAttempts: 0, reservationsFetched: true, reservations: action.reservations});
    case RESERVATIONS_FETCH_ERROR:
      return objectAssign({}, state, {fetchingReservations: false, fetchAttempts: state.fetchAttempts+1, error: action.error});
    case ORDER_PROCESSED:
      return reservationsInitialState;
    default:
      return state;
  };
};

export default Reservations;