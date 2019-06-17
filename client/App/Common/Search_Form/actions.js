import axios from 'axios';
import { browserHistory } from 'react-router';

export const OPEN_SEARCH_MODAL = 'OPEN_SEARCH_MODAL';
export const CLOSE_SEARCH_MODAL = 'CLOSE_SEARCH_MODAL';

export const openModal = () => {
  return {
    type: OPEN_SEARCH_MODAL
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_SEARCH_MODAL
  };
};

export const SEARCH_PROPERTIES = 'SEARCH_PROPERTIES';

export function searchProperties(search) {
	browserHistory.push(`/properties/search?location=${search.location}&date=${search.date}&time=${search.time}&guests=${search.guests}`);
	return {
		type: SEARCH_PROPERTIES,
		search
	};
};

export const RFP_TOGGLE = 'RFP_TOGGLE';

export function rfpToggle() {
	return {
		type: RFP_TOGGLE
	};
};

export const SELECT_LOCATION = 'SELECT_LOCATION';

export function selectLocation(location, isHomepage) {
	let change;

	if ( isHomepage ) {
		change = false;
	} else {
		change = true;
	}

	return {
		type: SELECT_LOCATION,
		location,
		change
	};
};