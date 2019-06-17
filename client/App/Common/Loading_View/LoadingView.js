import React from 'react';
import styles from './LoadingView.css';

import loaderSrc from '../../../assets/BizlyLoader.gif';
import loaderSrcB from '../../../assets/load-ellipsis.gif';

const LoadingView = ({viewname, loadingText}) => {
	if (!loadingText) loadingText = 'Please wait while we load the page'; 

  return (
  	<div>
  		{viewname == 'checkout' ? (
  		<div className={styles.checkoutpadding}> 
	      <img src={loaderSrcB} className={styles.checkoutload} />
	    </div>
	    ) : viewname == 'listings' ? (
	  	<div className={styles.listings}>
				<img src={loaderSrc} className={styles.loadimg} />
				<br />
				{loadingText}
		  </div>
	    ) : viewname == 'signup' ? (
	  	<div className={styles.signup}>
	      		<img src={loaderSrcB} className={styles.checkoutload} />
				<br />
				{loadingText}
		  </div>
		) : (
	  	<div className={styles.padding}>
				<img src={loaderSrc} className={styles.loadimg} />
				<br />
				{loadingText}
		  </div>
		)} 
    </div>
  );
};

export default LoadingView;