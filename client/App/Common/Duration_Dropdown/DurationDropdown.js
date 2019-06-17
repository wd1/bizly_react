import React from 'react';
import moment from 'moment';
import styles from './DurationDropdown.css';

const DurationDropdown = ({options, duration, minDuration, selectDuration, propStyles}) => {
  return (
    <select defaultValue={minDuration} value={duration} onChange={(event) => selectDuration(event.target.value)}>
      {options.map( (option, index) => <option key={index} value={option.duration} disabled={option.disabled}>{option.duration + ( option > 1 ? ' hours' : ' hour')}</option> )}
    </select>
  );
};

export default DurationDropdown;