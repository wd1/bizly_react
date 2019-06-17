import objectAssign from 'object-assign';
import { GETTING_TICKET, VIP_TICKET_ERROR, VIP_TICKET_FETCH_ERROR, VIP_TICKET_FETCHED } from './actions';

// TODO: Add to reducer
const VipTicketInitialState = {
  fetchingTicket: false,
  fetchedTicket: false,
  error: {
    show: false,
    message: ''
  },
  reservation: {
    propertyName: '',
    propertyLogo: '',
    address: '',
    wifi: '',
    roomName: '',
    date: '',
    startTime: '',
    endTime: '',
    hostName: '',
    hostEmail: '',
    hostPhone: '',
    guests: 0
  }
};

const VipTicket = ( state = VipTicketInitialState, action ) => {
  switch (action.type) {
    case GETTING_TICKET:
      return objectAssign({}, state, {fetchingTicket: true, error: VipTicketInitialState.error});
    case VIP_TICKET_ERROR:
    case VIP_TICKET_FETCH_ERROR:
      return objectAssign({}, state, {error: {show: true, message: action.error}});
    case VIP_TICKET_FETCHED:
      return objectAssign({}, state, {reservation: action.reservation});
    default:
      return state;
  }
};

export default VipTicket;