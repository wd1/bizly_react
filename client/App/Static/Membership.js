import React from 'react';
import styles from './Membership.css';
import infostyles from '../Pages/Home/Info_Grid/InfoTile.css';

import vipSrc from '../../assets/icon-vip.png';
import loyaltySrc from '../../assets/icon-loyalty.png';
import diningSrc from '../../assets/icon-diningexperience.png';
import portalSrc from '../../assets/icon-portal.png';

const Membership = () => {
  return (
    <div className={styles.staticwrap}>
    	<div className={styles.hero}>
    		<div className="container">
    			<div className="row">
    				<div className="col-xs-12 col-sm-8">
	    				<div className={styles.heroInner}>
	    					<div className={styles.introducing}>
	    						Introducing
	    					</div>
	    					<h1 className={styles.heading}>
	    						Bizly Membership
	    					</h1>
	    					<div className={styles.description}>
	    						Get exclusive member-only benefits and preferred access to a curated selection of private meeting spaces at leading hotels.
	    					</div>
	    					<form className={styles.emailsignup}>
	    						<input type="text" placeholder="Email address" className={styles.emailinput} />
	    						<input type="submit" value="Submit" className={styles.submitbutton} />
	    					</form>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    	<div className={styles.spaces}>
    		<div className="container">
    			<div className="row">
    				<div className="col-xs-12 col-sm-6">
    					<h2>Dozens of Sophisticated Spaces<br /> One Membership</h2>
    						<p className={styles.spacesdescription}> Monthly membership gets you 6  hours of meeting time to book any space across our network of luxury hotels in New York, San Francisco and Chicago (launching soon in Washington DC, Los Angeles and Boston). You’ll have the flexibility to meet when you need, where you need—whether it’s for an investor pitch, a client update, or a team offsite.
							</p>
    				</div>
    			</div>
    		</div>
    	</div>
    	<div className={styles.betaoffer}>
    		<div className="container">
    			<div className="row">
    				<div className="col-xs-12 ">
    					<h3>Exclusive Beta Offer</h3>
    					<div className={styles.price}>$299<span className={styles.permonth}>/month*</span></div>
    					<div className={styles.fineprint}>Includes 6 hours of private meeting space</div>
    				</div>
    			</div>
    		</div>
    	</div>
    	<div className={styles.infogrid}>
    		<div className="container">
    			<div className="row"> 
    				<div className="col-xs-6 col-sm-3">
				    	<div className={infostyles.infotile}>
					    	<div className={infostyles.iconwrap}>
						      <img src={loyaltySrc} />
						    </div> 
					      	<h3>Loyalty Rewards</h3>
					      	<div className={infostyles.description}>
					      		The more you book, the more you save
					      	</div>
				      	</div>
    				</div>
    				<div className="col-xs-6 col-sm-3">
				    	<div className={infostyles.infotile}>
					    	<div className={infostyles.iconwrap}>
						      <img src={diningSrc} />
						    </div> 
					      	<h3>Meeting Concierge</h3>
					      	<div className={infostyles.description}>
					      		Members are the Bizly Concierge's top priority
					      	</div>
				      	</div>
    				</div>
    				<div className="col-xs-6 col-sm-3">
				    	<div className={infostyles.infotile}>
					    	<div className={infostyles.iconwrap}>
						      <img src={portalSrc} />
						    </div> 
					      	<h3>Custom Portal</h3>
					      	<div className={infostyles.description}>
					      		Manage all your bookings and invites all in one place
					      	</div>
				      	</div>
    				</div>
    				<div className="col-xs-6 col-sm-3">
				    	<div className={infostyles.infotile}>
					    	<div className={infostyles.iconwrap}>
						      <img src={vipSrc} />
						    </div> 
					      	<h3>VIP Discounts</h3>
					      	<div className={infostyles.description}>
					      		Get same day discounts at hotel restaurants and bars
					      	</div>
				      	</div>
    				</div>
    			</div>
    		</div>
    	</div>
    	<div className={styles.memorable}>
    		<div className={styles.memorableinner}>
	    		<div className="container">
	    			<div className="row">
	    				<div className="col-xs-12  col-md-8 col-md-offset-2">
	    					<h3>Make it a memorable experience</h3>
	    					<div className={styles.memorabledetails}>With unique, inspired settings and five-star amenities available on demand, Bizly makes it simple to deliver a standout experience - so you can focus on the business at hand</div>
	    				</div>
	    			</div>
	    		</div>
    		</div>
    	</div>
    	<div className={styles.partners}>
    		<div className="container">
    			<div className="row">
    				<div className="col-xs-12">
    					<h3>Hospitality that makes the difference</h3>
    					<div className={styles.logoquilt}> </div>
    				</div>
    			</div>
    		</div>
    	</div>
    	<div className={styles.signuparea}>
    		<div className="container">
    			<div className="row">
    				<div className="col-xs-12 col-sm-6 col-sm-offset-3">
    					<h3>Let's Do this</h3>
    					<div className={styles.memorabledetails}>Sign up now to get on the waitlist</div>
    					<div className={styles.price}>$299<span className={styles.permonth}>/month*</span></div>
    					<div className={styles.ftform}>
	    					<form className={styles.emailsignup}>
	    						<input type="text" placeholder="Email address" className={styles.emailinput} />
	    						<input type="submit" value="Submit" className={styles.submitbutton} />
	    					</form> 
    					</div>
    					<div className={styles.fineprint}>* Introductory offer. We’ll notify you via email when an invite becomes available</div>
    				</div>
    			</div>
    		</div>
    	</div>

    </div>
  );
};

export default Membership;