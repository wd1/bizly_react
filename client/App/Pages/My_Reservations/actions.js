import axios from 'axios';
import moment from 'moment';

export function getUserReservations(id) {
  return dispatch => {
    dispatch( gettingReservations() );
    if (id) {
      return axios.get('/api/user/' + id + '/reservations')
        .then(response => {
          dispatch( receivedReservations(response.data))
        })
        .catch(error => dispatch( reservationsFetchError(error) ));
    } else {
      dispatch( reservationsFetchError('Bad user ID') )
    }
  };
};

export const GETTING_RESERVATIONS = 'GETTING_RESERVATIONS';

function gettingReservations() {
  return { type: GETTING_RESERVATIONS };
};

export const RECEIVED_RESERVATIONS = 'RECEIVED_RESERVATIONS';

function receivedReservations({ data }) {
  const reservations = data.filter(filterReservations).map(pickReservationObj).sort(sortByDate);
  return {
    type: RECEIVED_RESERVATIONS,
    reservations
  };

  function filterReservations(reservation) {
    if (reservation.attributes.state === 'confirmed') {
      const today = moment();
      const start = moment(reservation.attributes.blocked_time.start.date);
      return start.isAfter(today);
    }

    return false;
  };

  // add host details, property name, property address, room name
  function pickReservationObj(reservation) {
    const { attributes } = reservation;
    const startMoment = moment(attributes.blocked_time.start.date);
    const endMoment = moment(attributes.blocked_time.end.date);

    return {
      id: reservation.id,
      date: startMoment.format('MMM D, YYYY'),
      startTime: startMoment.format('h:mm A'),
      endTime: endMoment.format('h:mm A'),
      guests: attributes.guests,
      wifi: attributes.property.room.wifi_details,
      propertyName: attributes.property.name,
      propertyLogo: attributes.property.logo_url,
      address: attributes.property.display_address,
      roomName: attributes.property.room.name,
      roomImg: attributes.property.room.image_url,
      hostName: attributes.meeting_details.host_name,
      hostEmail: attributes.meeting_details.host_email,
      hostPhone: attributes.meeting_details.host_phone,
      hostCompany: attributes.meeting_details.host_company
    }
  }

  function sortByDate(first, second) {
    if ( moment(first.date, 'MMM D, YYYY').isAfter( moment(second.date, 'MMM D, YYYY') ) ) {
      return 1;
    } else {
      return -1;
    }
  }
};

export const RESERVATIONS_FETCH_ERROR = 'RESERVATIONS_FETCH_ERROR';

function reservationsFetchError(error) {
  return {
    type: RESERVATIONS_FETCH_ERROR,
    error
  };
};