import objectAssign from 'object-assign';
import { REQUEST_PROPERTIES, RECEIVE_PROPERTIES, GET_PROPERTIES_FAIL, TOGGLE_NOTIFY_MODAL } from './actions';

const propertiesInitialState = {
	fetched: false,
	properties: {
		isFetching: false,
		items: []
	},
	notifyMe: false
};

const Properties = ( state = propertiesInitialState, action ) => {
	switch (action.type) {
		case REQUEST_PROPERTIES:
			return objectAssign({}, state, {properties: featProps(state.properties, action)});
		case RECEIVE_PROPERTIES:
			return objectAssign({}, state, {fetched: true, properties: featProps(state.properties, action)});
		case TOGGLE_NOTIFY_MODAL:
			return objectAssign({}, state, {notifyMe: !state.notifyMe});
		default:
			return state;
	}
};

const featProps = ( state = propertiesInitialState.properties, action ) => {
	switch (action.type) {
		case REQUEST_PROPERTIES:
			return objectAssign({}, state, {isFetching: true});
		case RECEIVE_PROPERTIES:
			return objectAssign({}, state, {isFetching: false, items: action.data});
	}
};

export default Properties;