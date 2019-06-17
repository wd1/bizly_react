import React from 'react';
import styles from './InfoTile.css';

const InfoTile = ({icon, image, title, description}) => {
  return (
    <div className="col-xs-12 col-md-4">
    	<div className={styles.infotile}>
	    	<div className={styles.iconwrap}>
		      <img src={icon} />
		    </div> 
	      	<h3>{title}</h3>
	      	<div className={styles.description}>
	      		{description}
	      	</div>
      	</div>
    </div>
  )
}

export default InfoTile;