import React from 'react';
import styles from './GuestsDropdown.css';

const GuestsDropdown = ({ minCapacity, isModal, maxCapacity, guests, selectGuests, propStyles, isHomepage, options }) => {
  if ( !isHomepage ) {
    if ( guests * 1 < minCapacity ) selectGuests( minCapacity );
    if ( guests * 1 > maxCapacity ) selectGuests( maxCapacity );
  }

  return (
    <span  className={isModal == true ? styles.modalform : styles.notmodal}>
      <select value={guests} onChange={(event) => selectGuests(event.target.value, isHomepage)} className={styles.guestdrop}>
        {options.map( num => { return /*num < 41 ?*/(<option key={num} value={num}>{num + ( num < 2 ? ' guest' : ' guests')}</option>) /*:*/
          /*<option key={num} value={num}>40+ guests</option>*/
        })}
      </select>
    </span>
  );
};

export default GuestsDropdown;