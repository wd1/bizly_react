import React from 'react';
import styles from './ModifyBooking.css';

const ModifyBooking = () => {
  return (
    <div className={styles.container}>
      <span>To modify your reservation, please contact us at <a className={styles.bold} href='mailto:support@bizly.com'>support@bizly.com</a></span>
    </div>
  );
};

export default ModifyBooking;