import React from 'react';
import styles from './MembershipHero.css';
import { Link } from 'react-router';

const MembershipHero = () => {
  return (
    <div className={styles.joinhero}>
    	<h2>Join our Hotel Partner Network</h2>
    	<h3>Turn your unbooked meeting rooms into new revenue</h3>
	      <Link to={'/partnerships'} className={styles.memberbutton}>
	        Learn More
	      </Link>
	      <div className="container">
	      	<div className="row">
	      		<div className={"col-xs-12 " + styles.quiltimg}>
	      			<img src='https://res.cloudinary.com/hdd626jg7/image/upload/v1469204837/hotel-logo-quilt-2x_fcab61.png' />
	      		</div>
	      	</div>
	      </div>
    </div>
  );
};

export default MembershipHero;