import axios from 'axios';
import moment from 'moment';
import { browserHistory } from 'react-router';
import { extractErrorMessages } from '../../Common/functions';

export const PROCESSING_ORDER = 'PROCESSING_ORDER';
export const ORDER_PROCESSED = 'ORDER_PROCESSED';
export const ORDER_FAIL = 'ORDER_FAIL';

export function processOrder(id, order) {
  browserHistory.push('/confirmation');
	return dispatch => {
		dispatch( processingOrder() );
		return axios.post('/api/order/process/' + id, order)
			.then(response => dispatch( orderProcessed(response.data) ))
			.catch(error => dispatch( orderFail(error.data) ));
	};
};

export function processingOrder() {
  return {
    type: PROCESSING_ORDER
  };
};

export function orderProcessed({data}) {
  const reservation = pickReservationObj(data.order.reservations[0]);

  dataLayer.push({
    'event': 'funnel',
    'eventCategory': 'funnelstage',
    'eventAction': '1469150399805',
    'eventLabel': 'Books Room',
    'roomPrice': data.order.reservations[0].base
  });

  return {
    type: ORDER_PROCESSED,
    data,
    reservation
  };
};

export function orderFail({errors}) {
  const messages = extractErrorMessages(errors.messages);
  return {
    type: ORDER_FAIL,
    messages
  };
};

export const TOGGLE_TERM_AGREEMENT = 'TOGGLE_TERM_AGREEMENT';

export const toggleTermAgreement = () => ({type: TOGGLE_TERM_AGREEMENT});

function pickReservationObj(reservation) {
    const startMoment = moment(reservation.blocked_time.start);
    const endMoment = moment(reservation.blocked_time.end);

    return {
      id: reservation.id,
      date: startMoment.format('MMM D, YYYY'),
      startTime: startMoment.format('h:mm A'),
      endTime: endMoment.format('h:mm A'),
      guests: reservation.guests,
      wifi: reservation.property.room.wifi_details,
      propertyName: reservation.property.name,
      propertyLogo: reservation.property.logo_url,
      address: reservation.property.display_address,
      roomName: reservation.property.room.name,
      roomImg: reservation.property.room.image_url,
      hostName: reservation.meeting_details.host_name,
      hostEmail: reservation.meeting_details.host_email,
      hostPhone: reservation.meeting_details.host_phone
    }
  }