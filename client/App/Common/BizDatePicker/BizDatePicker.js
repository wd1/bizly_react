import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import styles from './BizDatePicker.css';

require('react-datepicker/dist/react-datepicker.css');

const BizDatePicker = ({minLeadTime, isModal, date, pickDate, propStyles, pdp, changeDate, blackoutDates, isHomepage}) => {
  if ( changeDate ) pickDate(minLeadTime, pdp);

	const pickDateForPicker = (date) => pickDate(date, pdp, isHomepage);

  return (
  	<span className={isModal == "true" ? styles.modalform : styles.notmodal}>
	    <span className={styles.datepickerwrap}>
	    	<span className={styles.datepickerelement}>
			     <DatePicker readOnly={true} selected={date} minDate={pdp ? minLeadTime : moment()} maxDate={moment().add(30, 'days')} dateFormat={'ddd MM/DD'} onChange={pickDateForPicker} excludeDates={blackoutDates}/>
				</span>
	    </span>
    </span>
  );
};

export default BizDatePicker;