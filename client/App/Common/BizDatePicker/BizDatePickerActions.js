export const PICK_DATE = 'PICK_DATE';

export function pickDate(date, isPDP, isHomepage) {
  let change;

  if ( isHomepage || isPDP ) {
    change = false;
  } else {
    change = true;
  }

  return {
    type: PICK_DATE,
    date,
    isPDP,
    change
  };
};