export const SELECT_GUESTS = 'SELECT_GUESTS';

export function selectGuests(guests, isHomepage) {
	let change;

	if ( isHomepage ) {
		change = false;
	} else {
		change = true;
	}

  return {
    type: SELECT_GUESTS,
    guests,
    change
  };
};

export const OPEN_GUESTS_MODAL = 'OPEN_GUESTS_MODAL';

export const openGuestsModal = () => ({ type: OPEN_GUESTS_MODAL });
// CLOSE_REQUEST_MODAL in Search_Form/actions will close the modal