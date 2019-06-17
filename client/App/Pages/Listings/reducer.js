import objectAssign from 'object-assign';
import { SEARCH_PROPERTIES } from '../../Common/Search_Form/actions';
import {
  REMOVE_ALL_FILTERS,
  ADD_FILTER,
  REMOVE_FILTER,
  REQUEST_LISTINGS,
  GET_PROPERTIES_SUCCESS,
  GET_PROPERTIES_FAIL,
  LISTINGS_CHANGE_WITH_CALL
} from './actions';

const PropertiesInitialState = {
  isFetching: false,
  fetched: false,
  fetchAttempts: 0,
  error: {
    show: false,
    message: ''
  },
  properties: [],
  amenities: [],
  filters: {}
};

const Listings = (state = PropertiesInitialState, action) => {
  switch (action.type) {
    case REMOVE_ALL_FILTERS:
      return objectAssign({}, state, { filters: {} });
    case ADD_FILTER:
      return objectAssign({}, state, { filters: { ...state.filters, ...action.filter } });
    case REMOVE_FILTER:
      delete state.filters[action.name];
      return { ...state };
    case SEARCH_PROPERTIES:
      return objectAssign({}, state, {isFetching: false, fetched: false, error: PropertiesInitialState.error});
    case REQUEST_LISTINGS:
      return objectAssign({}, state, {isFetching: true, fetched: false, fetchAttempts: state.fetchAttempts+1});
    case GET_PROPERTIES_SUCCESS:
      return objectAssign({}, state, {isFetching: false, fetched: true, ...action.data, fetchAttempts: 0, error: PropertiesInitialState.error});
    case GET_PROPERTIES_FAIL:
      return objectAssign({}, state, {isFetching: false, fetched: false, error: action.error });
    case LISTINGS_CHANGE_WITH_CALL:
      return objectAssign({}, state, {fetched: false});
    default:
      return state;
  }
};

export default Listings;