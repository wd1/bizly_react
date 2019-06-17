import React from 'react';
import StaticPagesHeader from './StaticPagesHeader';
import styles from './NewYork.css';

const NewYork = () => {
  return (
    <div className={styles.paddingTop}>
      <StaticPagesHeader/>
      NewYork
    </div>
  );
};

export default NewYork;