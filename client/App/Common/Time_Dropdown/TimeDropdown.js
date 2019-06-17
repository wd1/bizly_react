import React from 'react';
import moment from 'moment';
import styles from './TimeDropdown.css';

// TODO MIGI: change value based on date and if time is out of bounds based on duration and lead time
const TimeDropdown = ({time, selectTime, options, isHomepage, propStyles}) => {
  return (
    <select value={time} onChange={(event) => selectTime(event.target.value, isHomepage)}>
      <option value={'Select a time'} disabled>Select a time</option>
      {options.map( (option, index) => <option key={index} value={option.time} disabled={option.disabled}>{option.time}</option> )}
    </select>
  );
};

export default TimeDropdown;