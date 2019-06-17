import React from 'react';
import styles from './AppLink.css';

const AppLink = () => {
  return (
    <div className={styles.appimgs}>
    	<div className="container">
    		<div className="row">
    			<div className="col-xs-12 col-sm-6 col-md-6">
	      			<h2>Book meetings on demand, wherever you are</h2>
	      			<a href="http://apple.co/1lvBULX" target="_blank" className={styles.downloadbtn}>Download the iOS App</a>
	      		</div>
      		</div>
      	</div>
    </div>
  );
};

export default AppLink;