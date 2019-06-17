import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import AddOnBox from './AddOnBox';
import SearchDropdown from './SearchDropdown';
import styles from './DetailsPullout.css';

const DetailsPullout = ({amenities, operationTimes, loggedIn, openLogin, orderCreated, total, showError}) => {
  const hide = { display: 'none' };
  // add 'has-error' to search dropdown for property details
  return (
    <div>
      <SearchDropdown operationTimes={operationTimes}/>
      { amenities.length > 0 ?
      <div>
        <h3>Pick your add ons</h3>
        <AddOnBox amenities={amenities}/>
      </div> : false }
      <div className={styles.btnwrap}>
        <div style={loggedIn ? {} : hide}>
          <div style={orderCreated && !showError ? {}: hide}>
            <Link to="/checkout">
              <button className={styles.bookbutton}>${total}  |  BOOK THIS PRIVATE MEETING EXPERIENCE </button>
            </Link>
          </div>
        </div>
        <button style={loggedIn ? hide : {} } className={styles.bookbutton} onClick={() => openLogin()}>LOGIN TO BOOK ROOM</button>
      </div>
    </div>
  );
};

export default DetailsPullout;