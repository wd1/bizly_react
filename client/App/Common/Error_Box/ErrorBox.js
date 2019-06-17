import React from 'react';
import styles from './ErrorBox.css';

const ErrorBox = ({messages}) => {
  if ( messages.length > 0 )
  return (
    <div className={styles.errorouter}>
      {messages.map( (message, index) => (
        <span key={index} className={styles.errorbox}>{message}</span>
      ))}
    </div>
  );
};

export default ErrorBox;