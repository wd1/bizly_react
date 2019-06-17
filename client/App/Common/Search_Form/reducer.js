import objectAssign from 'object-assign';
import moment from 'moment';
import {
  SELECT_LOCATION,
  OPEN_SEARCH_MODAL,
  CLOSE_SEARCH_MODAL,
  SEARCH_PROPERTIES,
  SEARCH_FAIL,
  RFP_TOGGLE
} from './actions';
import { REQUEST_LISTINGS, GET_PROPERTIES_SUCCESS, GET_PROPERTIES_FAIL, LISTINGS_CHANGE_NO_CALL, LISTINGS_CHANGE_WITH_CALL } from '../../Pages/Listings/actions';
import { SELECT_ROOM_DESKTOP } from '../../Pages/Property/Desktop_Layout/actions';
import { PICK_DATE } from '../BizDatePicker/BizDatePickerActions';
import { SELECT_GUESTS, OPEN_GUESTS_MODAL } from '../Guests_Dropdown/GuestsDropdownActions';
import { SELECT_TIME } from '../Time_Dropdown/TimeDropdownActions';
import { SELECT_DURATION } from '../Duration_Dropdown/DurationDropdownActions';
import {
  CLOSE_REQUEST_MODAL,
  SUBMITTING_REQUEST_FORM,
  SUBMIT_REQUEST_SUCCESS,
  SUBMIT_REQUEST_ERROR
} from '../Request_Modal/actions';

const searchInitialState = {
  showModal: 'false',
  rfpModal: false,
  reqModal: '',
  reqForm: {
    submitting: false,
    message: '',
    errors: []
  },
  search: {
    changeWithCall: false,
    changeNoCall: false,
    location: 'NY',
    date: moment(),
    time: createDefaultTime(),
    duration: 1,
    guests: 2
  },
  error: {
    show: false,
    message: ''
  }
};

const Search = ( state = searchInitialState, action ) => {
  switch (action.type) {
    case OPEN_SEARCH_MODAL:
      return objectAssign({}, state, {showModal:'true'});
    case CLOSE_SEARCH_MODAL:
    case SEARCH_PROPERTIES:
      return objectAssign({}, state, {showModal:'false'});
    case RFP_TOGGLE:
      return objectAssign({}, state, {rfpModal: !state.rfpModal});
    case REQUEST_LISTINGS:
    case GET_PROPERTIES_SUCCESS:
    case GET_PROPERTIES_FAIL:
    case LISTINGS_CHANGE_NO_CALL:
    case LISTINGS_CHANGE_WITH_CALL:
    case PICK_DATE:
    case SELECT_LOCATION:
    case SELECT_GUESTS:
    case SELECT_TIME:
    case SELECT_DURATION:
    case SELECT_ROOM_DESKTOP:
      return objectAssign({}, state, {search: searchForm(state.search, action)});
    case SEARCH_FAIL:
      return objectAssign({}, state, {search: searchForm(state.search, action), error: action.errors});
    case OPEN_GUESTS_MODAL:
      return objectAssign({}, state, {search: searchForm(state.search, action), reqModal: 'guests'});
    case CLOSE_REQUEST_MODAL:
      return objectAssign({}, state, {reqModal: '', reqForm: searchInitialState.reqForm});
    case SUBMITTING_REQUEST_FORM:
    case SUBMIT_REQUEST_SUCCESS:
    case SUBMIT_REQUEST_ERROR:
      return objectAssign({}, state, {reqForm: reqForm( state.reqForm, action )});
    default:
      return state;
  }
};

function searchForm( state = searchInitialState.search, action ) {
  switch (action.type) {
    case REQUEST_LISTINGS:
      return objectAssign({}, state, changeSearchParams(action.search));
    case GET_PROPERTIES_SUCCESS:
    case GET_PROPERTIES_FAIL:
    case LISTINGS_CHANGE_WITH_CALL:
      return objectAssign({}, state, {changeWithCall: false});
    case LISTINGS_CHANGE_NO_CALL:
      return objectAssign({}, state, {changeNoCall: false});
    case PICK_DATE:
      return objectAssign({}, state, {changeWithCall: action.change, date: action.date});
    case SELECT_LOCATION:
      return objectAssign({}, state, {changeNoCall: action.change, location: action.location});
    case SELECT_GUESTS:
      return objectAssign({}, state, {changeNoCall: action.change, guests: action.guests});
    case SELECT_TIME:
      return objectAssign({}, state, {changeWithCall: action.change, time: action.time});
    case SELECT_DURATION:
      return objectAssign({}, state, {duration: action.duration});
    case SELECT_ROOM_DESKTOP:
      return objectAssign({}, state, {addOns: []});
    case OPEN_GUESTS_MODAL:
      return objectAssign({}, state, {guests: 41});
    default:
      return state;
  }

  function reqForm( state = searchInitialState.reqForm, action ) {
    switch (action.type) {
      case SUBMITTING_REQUEST_FORM:
        return objectAssign({}, state, { submitting: true });
      case SUBMIT_REQUEST_SUCCESS:
        return objectAssign({}, state, { submitting: false, message: action.data });
      case SUBMIT_REQUEST_ERROR:
        return objectAssign({}, state, { submitting: false, errors: action.messages });
    }
  };

  function changeSearchParams(search) {
    if ( search.date ) {
      return objectAssign({}, search, {time: moment(action.search.time, 'HHmm').format('hh:mm a')});
    }
  };
};

function createDefaultTime() {
  const currentTime = moment().add(1, 'hours');

  if ( currentTime.minutes() < 30 ) {
    return currentTime.minutes(30).format('hh:mm a');
  } else {
    return currentTime.add(1, 'hours').minutes(0).format('hh:mm a');
  }
};

export default Search;