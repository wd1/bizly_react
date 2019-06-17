export const SELECT_TIME = 'SELECT_TIME';

export function selectTime(time, isHomepage) {
  let change;

  if ( isHomepage ) {
    change = false;
  } else {
    change = true;
  }

  return {
    type: SELECT_TIME,
    time,
    change
  };
};