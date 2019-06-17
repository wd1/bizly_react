import objectAssign from 'object-assign';
import moment from 'moment';
import { REMOVE_ROOM_IN_CART } from '../../Common/Cart/actions';
import { SELECT_ROOM_DESKTOP } from './Desktop_Layout/actions';
import {
  TOGGLE_MOBILE_VIEW,
  OPEN_ROOM_MODAL,
  CLOSE_ROOM_MODAL
} from './Mobile_Layout/actions';
import { TOGGLE_ROOM_TAB } from './Rooms_Layout/RoomListingActions';
import { TOGGLE_TAB_ADD_ON } from './Rooms_Layout/AddOnActions.js';
import {
  GET_PROPERTY_DETAILS,
  GET_DETAILS_SUCCESS,
  GET_DETAILS_FAIL
} from './actions';

const detailsInitialState = {
  slug: '',
  fetched: false,
  isFetching: false,
  getDetailsAttempts: 0,
  showRooms: true,
  roomModal: false,
  roomSlug: '',
  selectedRoom: {
    id: 0,
    attributes: {
      name: '',
      min_capacity: 1, // leave here or remove attributes
      max_capacity: 40, // leave here or remove attributes
      min_duration: 60
    },
    minLeadTime: moment() || '', // leave here or put in attributes
    amenities: [],
    ratePlans: [],
    blockedTimes: [],
    blackoutDates: [],
    meetingTimes: []
  },
  property: {
    name: '',
    image: '',
    images: [],
    tags: [],
    displayAddress: '',
    fullAddress: '',
    deckline: '',
    description: '',
    flipInterval: 0,
    amenities: [],
    freebies: [],
    policies: [],
    execSummary: '',
    coord: [],
    nearby: [],
    operationTimes: [],
    rooms: []
  },
  addOnDetails: [],
  roomDetails: [],
  error: {}
};

// handle error loading page
// reset selected room after booking
const PropertyDetails = (state = detailsInitialState, action) => {
  switch (action.type) {
    case OPEN_ROOM_MODAL:
      return objectAssign({}, state, {roomModal: true, roomSlug: action.roomSlug, selectedRoom: selectRoom(action.room)});
    case CLOSE_ROOM_MODAL:
    case REMOVE_ROOM_IN_CART:
      return objectAssign({}, state, clearRoomSelection());
    case GET_PROPERTY_DETAILS:
      return objectAssign({}, state, {isFetching: true, slug: action.slug});
    case GET_DETAILS_SUCCESS:
      return objectAssign({}, state, {getDetailsAttempts: 0, fetched: true, isFetching: false, property: action.property, selectedRoom: detailsInitialState.selectedRoom});
    case GET_DETAILS_FAIL:
      return objectAssign({}, state, {getDetailsAttempts: state.getDetailsAttempts+1, fetched: false, isFetching: false, error: action.error});
    case TOGGLE_MOBILE_VIEW:
      return objectAssign({}, state, { showRooms: !state.showRooms });
    case TOGGLE_ROOM_TAB:
      return objectAssign({}, state, { roomDetails: toggleTab(state, action) });
    case TOGGLE_TAB_ADD_ON:
      return objectAssign({}, state, { addOnDetails: toggleTab(state, action)});
    case SELECT_ROOM_DESKTOP:
      return objectAssign({}, state, {roomSlug: action.roomSlug, selectedRoom: selectRoom(action.room), addOnDetails: []});
    default:
      return state;
  }
};

function clearRoomSelection() {
  return {
    roomSlug: '',
    selectedRoom: detailsInitialState.selectedRoom,
    roomModal: false
  }
}

function toggleTab(state = detailsInitialState, action) {
  switch (action.type) {
    case TOGGLE_ROOM_TAB:
      return addOrRemoveId(state.roomDetails, action.id);
    case TOGGLE_TAB_ADD_ON:
      return addOrRemoveId(state.addOnDetails, action.id);
  }

  function addOrRemoveId(arrayOfIds, id) {
    if ( arrayOfIds.includes(id) ) return arrayOfIds.filter( arrayId => arrayId !== id );
    return arrayOfIds.concat(id);
  }
}

function selectRoom(room) {
  return objectAssign({}, room, { minLeadTime: moment().add( parseInt(room.attributes.min_lead_time.value), room.attributes.min_lead_time.units ) });
};

export default PropertyDetails;