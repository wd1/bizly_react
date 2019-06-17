import axios from 'axios';

export const REQUEST_PROPERTIES = 'REQUEST_PROPERTIES';

export const RECEIVE_PROPERTIES = 'RECEIVE_PROPERTIES';

export const GET_PROPERTIES_FAIL = 'GET_PROPERTIES_FAIL';

export const TOGGLE_NOTIFY_MODAL = 'TOGGLE_NOTIFY_MODAL';

export function toggleNotifyModal() {
	return { type: TOGGLE_NOTIFY_MODAL };
};

//TODO: add moment for timestamps
export function requestProperties() {
	return {
		type: REQUEST_PROPERTIES,
		sentAt: Date.now()
	};
};

export function receiveProperties(response) {
	return {
		type: RECEIVE_PROPERTIES,
		data: parseResponse(response),
		receivedAt: Date.now()
	};
};

export function getPropertiesFail(error) {
	//console.log('error', error) // TODO find out what error looks like
	return {
		type: GET_PROPERTIES_FAIL,
		receivedAt: Date.now(),
		error
	};
};

export function fetchProperties() {
	return dispatch => {
		dispatch(requestProperties());
		return axios.get('/api/properties/featured')
			.then( response => dispatch( receiveProperties(response.data.data) ))
			.catch( error => dispatch( getPropertiesFail(error) ));
	};
};

// TODO: shuffle array on every load
const discardExtraProperties = ( currentValue, index ) => {
  if ( index < 6 ) return currentValue;
};

const returnStrippedProperty = ( currentValue, index ) => {
  return {
    id: currentValue.id,
    name: currentValue.attributes.display_name,
    image: currentValue.attributes.image_url,
    price: currentValue.attributes.starting_at,
		slug: currentValue.attributes.slug,
		city: currentValue.attributes.city,
    index: index
  };
};

const parseResponse = data => data.filter(discardExtraProperties).map(returnStrippedProperty);