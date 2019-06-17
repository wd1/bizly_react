import axios from 'axios';
import moment from 'moment';

export const getVipTicket = (inviteId) => {
  return dispatch => {
    dispatch( gettingTicket() );
    if (inviteId) {
      return axios.get(`/api/invites/${inviteId}`)
        .then(response => dispatch( vipTicketFetched(response.data) ))
        .catch(error => dispatch( vipTicketError(error.data) ));
    } else {
      return dispatch( vipTicketFetchError('No invite id detected') );
    }
  };
};

export const GETTING_TICKET = 'GETTING_TICKET';

const gettingTicket = () => ({type: GETTING_TICKET});

export const VIP_TICKET_FETCHED = 'VIP_TICKET_FETCHED';

const vipTicketFetched = ({data}) => {
  const reservation = buildReservationObj(data[0]);
  return {
    type: VIP_TICKET_FETCHED,
    reservation
  };
};

function buildReservationObj(reservation) {
  const start = moment(reservation.attributes.blocked_time.start.date);
  const end = moment(reservation.attributes.blocked_time.end.date);
  return {
    propertyName: reservation.attributes.property.name,
    propertyLogo: reservation.attributes.property.logo_url,
    address: reservation.attributes.property.display_address,
    wifi: reservation.attributes.property.room.wifi_details,
    roomName: reservation.attributes.property.room.name,
    date: start.format('MMM D, YYYY'),
    startTime: start.format('h:mm A'),
    endTime: end.format('h:mm A'),
    hostName: reservation.attributes.meeting_details.host_name,
    hostEmail: reservation.attributes.meeting_details.host_email,
    hostPhone: reservation.attributes.meeting_details.host_phone,
    guests: reservation.attributes.guests
  }
}

export const VIP_TICKET_ERROR = 'VIP_TICKET_ERROR';

// error should be the message
const vipTicketError = ({errors}) => {
  const error = 'standard default';
  return {
    type: VIP_TICKET_ERROR,
    error
  };
};

export const VIP_TICKET_FETCH_ERROR = 'VIP_TICKET_FETCH_ERROR';

export const vipTicketFetchError = (error) => {
  return {
    type: VIP_TICKET_FETCH_ERROR,
    error
  };
};