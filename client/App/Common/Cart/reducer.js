import moment from 'moment';
import objectAssign from 'object-assign';
import { PICK_DATE } from '../BizDatePicker/BizDatePickerActions';
import { SELECT_GUESTS } from '../Guests_Dropdown/GuestsDropdownActions';
import { SELECT_TIME } from '../Time_Dropdown/TimeDropdownActions';
import { SELECT_DURATION } from '../Duration_Dropdown/DurationDropdownActions';
import { ORDER_PROCESSED } from '../../Pages/Checkout/actions';
import { SELECT_ROOM_DESKTOP } from '../../Pages/Property/Desktop_Layout/actions';
import { OPEN_ROOM_MODAL } from '../../Pages/Property/Mobile_Layout/actions';
import { GET_DETAILS_SUCCESS } from '../../Pages/Property/actions';
import { LOG_OUT_SUCCESS } from '../Header/actions';
import { ADD_ON_TOGGLE_CART, REMOVE_ADD_ON_FROM_CART } from '../../Pages/Property/Rooms_Layout/AddOnActions';
import {
  APPLYING_PROMO_CODE,
  PROMO_CODE_ACCEPTED,
  PROMO_CODE_DECLINED,
  PROMO_CODE_FORM_ERROR,
  REMOVING_PROMO_CODE,
  PROMO_CODE_REMOVED,
  CODE_REMOVAL_ERROR
} from './Promo_Code/PromoCodeFormActions';
import {
  CREATING_ORDER,
  ORDER_CREATED,
  ORDER_CREATION_FAIL,
  REMOVE_ROOM_IN_CART,
  EDITING_RESERVATION,
  RESERVATION_EDITED,
  RESERVATION_EDIT_FAIL,
  EDITING_AMENITIES,
  AMENITIES_EDITED,
  AMENITIES_EDIT_FAIL
} from './actions';

const cartInitialState = {
  creatingOrder: false,
  orderCreated: false,
  createOrderAttempts: 0,
  shouldEditOrder: false,
  editingOrder: false,
  reservationId: 0,
  userId: 0,
  roomId: 0,
  roomImg: '',
  orderId: 0,
  date: moment().format('YYYY-MM-DD'),
  isWithinWeek: true,
  startTime: 'Select a time',
  duration: 1,
  guests: 1,
  taxes: 0,
  fees: 0,
  total: 0,
  promo: {
    code: '',
    type: '',
    sending: false,
    accepted: false,
    removing: false,
    value: 0,
    errors: {
      show: false,
      messages: ''
    },
    formError: ''
  },
  shouldEditAmenities: false,
  editingAmenities: false,
  amenities: [],
  lineItems: [],
  errors: {
    show: false,
    messages: []
  }
};

// promo_credit_debits to show amount removed
const Cart = (state = cartInitialState, action) => {
  switch (action.type) {
    case LOG_OUT_SUCCESS:
      return objectAssign({}, state, orderReset(state, action));
    case REMOVE_ROOM_IN_CART:
      return objectAssign({}, state, {roomId: 0});
    case CREATING_ORDER:
      return objectAssign({}, state, mapCartToState(action.cart));
    case ORDER_CREATED:
      return objectAssign({}, state, {createOrderAttempts: 0, orderCreated: true, creatingOrder: false, errors: cartInitialState.errors}, mapOrderDetailsToState(state, action));
    case ORDER_CREATION_FAIL:
      return objectAssign({}, state, {createOrderAttempts: state.createOrderAttempts+1, orderCreated: false, creatingOrder: false, errors: handleErrors(action.messages)});
    case ORDER_PROCESSED:
      return objectAssign({}, cartInitialState, {userId: action.data.order.user_id});
    case EDITING_RESERVATION:
      return objectAssign({}, state, {shouldEditOrder: false, editingOrder: true});
    case RESERVATION_EDITED:
      return objectAssign({}, state, {editingOrder: false, errors: cartInitialState.errors, promo: cartInitialState.promo}, mapOrderDetailsToState(state, action));
    case RESERVATION_EDIT_FAIL:
      return objectAssign({}, state, {editingOrder: false, errors: handleErrors(action.messages)});
    case PICK_DATE:
    case SELECT_GUESTS:
    case SELECT_TIME:
    case SELECT_DURATION:
    case SELECT_ROOM_DESKTOP:
    case OPEN_ROOM_MODAL:
      return objectAssign({}, state, addChangesToCart(state, action));
    case REMOVE_ADD_ON_FROM_CART:
      return objectAssign({}, state, {shouldEditAmenities: state.orderCreated, amenities: buildAmenitiesArray(state.amenities, action)});
    case ADD_ON_TOGGLE_CART:
      return objectAssign({}, state, {shouldEditAmenities: state.orderCreated, amenities: buildAmenitiesArray(state.amenities, action)});
    case EDITING_AMENITIES:
      return objectAssign({}, state, {editingAmenities: true, shouldEditAmenities: false});
    case AMENITIES_EDITED:
      return objectAssign({}, state, {editingAmenities: false, amenities: removeAmenities(state.amenities), errors: cartInitialState.errors}, mapOrderDetailsToState(state, action));
    case AMENITIES_EDIT_FAIL:
      return objectAssign({}, state, {editingAmenities: false, errors: handleErrors(action.messages)});
    case PROMO_CODE_ACCEPTED:
    case PROMO_CODE_REMOVED:
      return objectAssign({}, state, {taxes: action.data.order.taxes.toFixed(2), fees: action.data.order.fees.toFixed(2), total: action.data.order.transaction_amount.toFixed(2), promo: promoCode(state.promo, action)});
    case PROMO_CODE_DECLINED:
    case PROMO_CODE_FORM_ERROR:
    case CODE_REMOVAL_ERROR:
    case APPLYING_PROMO_CODE:
    case REMOVING_PROMO_CODE:
      return objectAssign({}, state, {promo: promoCode(state.promo, action)});
    default:
      return state;
  }
};

export default Cart;

function orderReset(state, action) {
  return {
    creatingOrder: false,
    orderCreated: false,
    createOrderAttempts: 0,
    reservationId: 0,
    userId: 0,
    orderId: 0,
    roomId: 0,
    taxes: 0,
    fees: 0,
    total: 0,
    promo: cartInitialState.promo
  }
};

function mapCartToState(cart) {
  return {
    creatingOrder: true,
    userId: cart.user_id,
    roomId: cart.reservations[0].room_id,
    date: cart.reservations[0].date,
    startTime: cart.reservations[0].start_time,
    duration: cart.reservations[0].duration,
    guests: cart.reservations[0].guests
  };
};

function mapOrderDetailsToState(state, action) {
  return {
    orderId: action.order.id,
    taxes: action.order.taxes.toFixed(2),
    fees: action.order.fees.toFixed(2),
    total: action.order.total.toFixed(2),
    reservationId: action.order.reservations[0].id,
    lineItems: parseLineItems(action.order.reservations[0].line_items),
    amenities: filterAmenitiesAgainstLineItems( state.amenities, action.order.reservations[0].line_items ),
    blockedTimeId: action.order.reservations[0].blocked_time_id
  };
};

function filterAmenitiesAgainstLineItems( amenities, lineItems ) {
  return amenities.filter( amenity => lineItems.find( lineItem => lineItem.object_id === amenity.id ) );
}

// add rate here for hourly room rate
function parseLineItems(lineItems) {
  return lineItems.map(item => ({
    id: item.object_id,
    taxes: item.taxes.toFixed(2),
    fees: item.fees.toFixed(2),
    total: item.total.toFixed(2),
    type: item.object_type.split('\\')[2].toLowerCase()
  }));
};

function addChangesToCart( state = cartInitialState, action ) {
  let shouldEditOrder = false;

  if (state.orderCreated) {
    shouldEditOrder = true
  };

  switch (action.type) {
    case PICK_DATE:
      return {createOrderAttempts: 0, shouldEditOrder, date: action.date.format('YYYY-MM-DD'), isWithinWeek: moment().add(7, 'days').isAfter(action.date)};
    case SELECT_GUESTS:
      return {createOrderAttempts: 0, shouldEditOrder, guests: action.guests, shouldEditAmenities: state.orderCreated && state.amenities.length > 0 ? true : false};
    case SELECT_TIME:
      return {createOrderAttempts: 0, shouldEditOrder, startTime: action.time};
    case SELECT_DURATION:
      return {createOrderAttempts: 0, shouldEditOrder, duration: action.duration};
    case SELECT_ROOM_DESKTOP:
    case OPEN_ROOM_MODAL:
      return {createOrderAttempts: 0, shouldEditOrder, roomId: action.room.id, roomImg: action.room.attributes.image_url, amenities: []};
  }
};

function buildAmenitiesArray( state = cartInitialState.amenities, action ) {
  if (state.length < 1) return [{id: parseInt(action.id), flatRate: action.flatRate, remove: false}];

  let addOnIncluded = false;

  const amenityIndex = state.findIndex( addOn => {
    return addOn.id === action.id * 1;
  });

  if ( amenityIndex < 0 ) {
    return state.concat({id: parseInt(action.id), flatRate: action.flatRate, remove: false});
  } else {
    return state.map( (amenity, index, array) => {
      if ( index === amenityIndex ) {
        return {
          id: parseInt(amenity.id),
          flatRate: amenity.flatRate,
          remove: !array[index].remove
        }
      }
      return amenity;
    });
  }
};

function removeAmenities( state = cartInitialState.amenities ) {
  return state.filter(amenity => {
    return !amenity.remove;
  });
};

function promoCode( state = cartInitialState.promo, action ) {
  switch (action.type) {
    case APPLYING_PROMO_CODE:
      return objectAssign({}, state, {sending: true, errors: cartInitialState.promo.errors});
    case PROMO_CODE_ACCEPTED:
      return objectAssign({}, state, {sending: false, accepted: true, value: action.data.promo_code.value, type: action.data.promo_code.type, code: action.data.promo_code.code, errors: cartInitialState.promo.errors, formError: cartInitialState.promo.formError});
    case PROMO_CODE_DECLINED:
      return objectAssign({}, state, {sending: false, errors: handleErrors(action.errors.messages)});
    case REMOVING_PROMO_CODE:
      return objectAssign({}, state, {removing: true, errors: cartInitialState.promo.errors});
    case PROMO_CODE_REMOVED:
      return objectAssign({}, cartInitialState.promo);
    case CODE_REMOVAL_ERROR:
      return objectAssign({}, state, {removing: false, errors: handleErrors(action.errors.message)});
    case PROMO_CODE_FORM_ERROR:
      return objectAssign({}, state, {errors: handleErrors(action.error)});
  }
};

function handleErrors(messages) {
  return {
    show: true,
    messages
  };
};