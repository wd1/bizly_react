import moment from 'moment';

import axios from 'axios';


export const REMOVE_ROOM_IN_CART = 'REMOVE_ROOM_IN_CART';

export const removeRoom = () => {
  return {
    type: REMOVE_ROOM_IN_CART
  };
};


export const CREATING_ORDER = 'CREATING_ORDER';

export function creatingOrder(cart) {
  return {
    type: CREATING_ORDER,
    cart
  };
};


export const ORDER_CREATED = 'ORDER_CREATED';

export function orderCreated({data}) {
  return {
    type: ORDER_CREATED,
    order: data.order
  };
};


export const ORDER_CREATION_FAIL = 'ORDER_CREATION_FAIL';

export function orderCreationFail({errors}) {
  return {
    type: ORDER_CREATION_FAIL,
    messages: errors.messages
  };
};


export const createOrder = (cartObj) => {
  return dispatch => {
    dispatch( creatingOrder(cartObj) );
    return axios.post('/api/order/create', cartObj)
      .then(response => dispatch( orderCreated( response.data )))
      .catch(error => dispatch( orderCreationFail( error.data )));
  };
};


export const EDITING_RESERVATION = 'EDITING_RESERVATION';

export const editingReservation = (cart) => {
  return {
    type: EDITING_RESERVATION,
    cart
  };
};


export const RESERVATION_EDITED = 'RESERVATION_EDITED';

export const reservationEdited = ({data}) => {
  return {
    type: RESERVATION_EDITED,
    order: data.order
  };
};


export const RESERVATION_EDIT_FAIL = 'RESERVATION_EDIT_FAIL';

export const reservationEditFail = ({errors}) => {
  return {
    type: RESERVATION_EDIT_FAIL,
    messages: errors.messages
  };
};


export const editReservation = (cartObj, id) => {
  // console.log('EDITING THIS', cartObj);
  return dispatch => {
    dispatch( editingReservation(cartObj) );
    return axios.put('/api/order/' + id, cartObj)
      .then(response => dispatch( reservationEdited( response.data )))
      .catch(error => dispatch( reservationEditFail( error.data )));
  };
};


export const EDITING_AMENITIES = 'EDITING_AMENITIES';

export const editingAmenities = ({amenities}) => {
  return {
    type: EDITING_AMENITIES,
    amenities
  };
};


export const AMENITIES_EDITED = 'AMENITIES_EDITED';

export const amenitiesEdited = ({data}) => {
  return {
    type: AMENITIES_EDITED,
    order: data.order
  };
};


export const AMENITIES_EDIT_FAIL = 'AMENITIES_EDIT_FAIL';

export const amenitiesEditFail = ({errors}) => {
  return {
    type: AMENITIES_EDIT_FAIL,
    messages: errors.messages
  };
};


export const editAmenities = (amenities, id) => {
  return dispatch => {
    dispatch( editingAmenities(amenities) );
    return axios.post('/api/order/amenities/' + id, amenities)
      .then(response => dispatch( amenitiesEdited( response.data )))
      .catch(error => dispatch( amenitiesEditFail( error.data )));
  };
};