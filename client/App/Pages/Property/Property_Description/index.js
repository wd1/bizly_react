import React, { PropTypes } from 'react';
import styles from './index.css';

const PropertyDescription = ({ deckline, description }) => {
  return (
    <div className={styles.descriptionwrap}>
    	<div className={styles.descriptioninner}>
      		<div className={styles.deckline} dangerouslySetInnerHTML={{__html: deckline}}></div>
      		<div className={styles.contentwrap} dangerouslySetInnerHTML={{__html: description}}></div>
    	</div>
    </div>
  );
  // TODO MIGI: create cart
};

export default PropertyDescription;