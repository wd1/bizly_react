import React, { PropTypes } from 'react';
import BizDatePickerContainer from '../../../Common/BizDatePicker/BizDatePickerContainer';
import TimeDropdownContainer from '../../../Common/Time_Dropdown/TimeDropdownContainer';
import DurationDropdownContainer from '../../../Common/Duration_Dropdown/DurationDropdownContainer';
import GuestsDropdownContainer from '../../../Common/Guests_Dropdown/GuestsDropdownContainer';
import styles from './SearchDropdown.css';

// REFACTOR: merge with SearchForm
const SearchDropdown = ({operationTimes}) => {
  return (
    <div className="roomsearch">
	    <div className={styles.searchcontainer}>
	    	<div className={styles.dropwrap}>
	    		<strong>Booking </strong>
				<div className={styles.searchInput}>
					<BizDatePickerContainer pdp={true} listingSearchStyles={styles}/>
				</div>
			</div>
	    	<div className={styles.dropwrap}>
	    		<strong>Number of Guests</strong>
					<div className={styles.searchInput}>
	      		<GuestsDropdownContainer pdp={true} listingSearchStyles={styles}/>
					</div>
			</div>
	    	<div className={styles.dropwrap}>
	    		<strong>Starts At</strong>
					<div className={styles.searchInput}>
						<TimeDropdownContainer pdp={true} listingSearchStyles={styles} operationTimes={operationTimes}/>
					</div>
			</div>
	    	<div className={styles.dropwrap}>
	    		<strong>Duration</strong>
					<div className={styles.searchInput}>
							<DurationDropdownContainer pdp={true} listingSearchStyles={styles}/>
					</div>
			</div>
	    </div>
    </div>
  );
};

export default SearchDropdown;

// make the guests input a number input with validation between 1 and 40
// get the availability times
// munge through blockedTimes data
// use those to properly map the times for options