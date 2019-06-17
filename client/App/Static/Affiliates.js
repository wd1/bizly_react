import React from 'react';
import StaticPagesHeader from './StaticPagesHeader';
import styles from './Membership.css';
import partnerstyles from './Partnerships.css';
import infostyles from '../Pages/Home/Info_Grid/InfoTile.css';
import affiliatestyles from './Affiliates.css';


import inventorySrc from '../../assets/icon-inventory.png';
import calendarSrc from '../../assets/icon-calendar.png';
import revenueSrc from '../../assets/icon-revenue.png';
import trustSrc from '../../assets/icon-trust.png';

const Affiliates = () => {
  return (

    <div className={styles.staticwrap}>
    	<div className={styles.hero + ' ' + affiliatestyles.herobg}>
    		<div className="container">
    			<div className="row">
    				<div className="col-xs-12 col-sm-8">
	    				<div className={styles.heroInner}>
	    					<h1 className={styles.heading}>
	    						Bizly Affiliate Program
	    					</h1>
	    					<div className={affiliatestyles.herodescription}>
	    						Use Bizly’s technology and inventory to tap into a new revenue channel
	    					</div>
	    					<div className={affiliatestyles.herobtnwrap}>
	    						<a href="mailto:partners@bizly.com" target="_blank"><button className={affiliatestyles.applybutton}>Apply</button></a>
	    					</div>
    					</div>
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
						      <img src={inventorySrc} />
						    </div>
					      	<h3>Quality Inventory</h3>
					      	<div className={infostyles.description}>
					      		Only the best hotel meeting experiences
					      	</div>
				      	</div>
    				</div>
    				<div className="col-xs-6 col-sm-3">
				    	<div className={infostyles.infotile}>
					    	<div className={infostyles.iconwrap}>
						      <img src={calendarSrc} />
						    </div>
					      	<h3>Product Excellence</h3>
					      	<div className={infostyles.description}>
					      		Flawless booking technology and customer service
					      	</div>
				      	</div>
    				</div>
    				<div className="col-xs-6 col-sm-3">
				    	<div className={infostyles.infotile}>
					    	<div className={infostyles.iconwrap}>
						      <img src={revenueSrc} />
						    </div>
					      	<h3>New Revenue</h3>
					      	<div className={infostyles.description}>
					      		Create new revenue around meeting bookings
					      	</div>
				      	</div>
    				</div>
    				<div className="col-xs-6 col-sm-3">
				    	<div className={infostyles.infotile}>
					    	<div className={infostyles.iconwrap}>
						      <img src={trustSrc} />
						    </div>
					      	<h3>Trust Building</h3>
					      	<div className={infostyles.description}>
					      		Build customer trust around small meetings
					      	</div>
				      	</div>
    				</div>
    			</div>
    		</div>
    	</div>
    	<div className={styles.betaoffer + ' ' + affiliatestyles.applybox}>
    		<div className="container">
    			<div className="row">
    				<div className="col-xs-12 ">
    					<h3>Tap into the future</h3>
    					<div className={affiliatestyles.exclusively}>Get access to the Bizly API and share revenue now</div>
    					<div className={affiliatestyles.applybuttonwrap}><a href="mailto:partners@bizly.com" target="_blank"><button className={affiliatestyles.invertbutton}>Apply</button></a></div>
    				</div>
    			</div>
    		</div>
    	</div>
    	<div className={styles.spaces + ' ' + affiliatestyles.howitworks}>
    		<div className="container">
    			<div className="row">
    				<div className="col-xs-12 col-sm-6">
    					<h2>Integration Options</h2>
    						<p className={styles.spacesdescription}>Integrate the Bizly API into your site and open new revenue instantly
							</p>
							<ul className={affiliatestyles.bullets}>
								<li>Referral widgets
									<br /><span className={affiliatestyles.options}>Get custom designed widgets for your website that produce revenue instantly</span>
								</li>
								<li>API Integration
									<br /><span className={affiliatestyles.options}>Integrate Bizly’s pipeline of inventory and rates into your booking platform</span>
								</li>
								<li>SDK Mobile App Integrations
									<br /><span className={affiliatestyles.options}>Use Bizly’s iOS technologies to enable your native mobile app to book meetings</span>
								</li>
								<li>White Label Solution
									<br /><span className={affiliatestyles.options}>Hotels can integrate Bizly widget and booking pages directly into the design of their website</span>
								</li>
							</ul>
    				</div>
    			</div>
    		</div>
    	</div>
    	<div className={styles.memorable + ' ' + affiliatestyles.joinbox}>
    		<div className={styles.memorableinner}>
	    		<div className="container">
	    			<div className="row">
	    				<div className="col-xs-12  col-md-8 col-md-offset-2">
	    					<h3>A New World of Revenue</h3>
	    					<div className={styles.memorabledetails}>The mobile workforce is taking over.  Companies around the world are shrinking their office space and seeking flexible on demand spaces to meet, be productive and inspire.  Whether you are a meeting & event professional, travel agency or in the commercial real estate industry, BIZLY provides a solution to tap into the opportunity of the future.  </div>
	    				</div>
	    			</div>
	    		</div>
    		</div>
    	</div>
    	<div className={styles.partners}>
    		<div className="container">
    			<div className="row">
    				<div className="col-xs-12">
    					<h3>Only the Best Brands and Experiences</h3>
    					<div className={styles.logoquilt}> </div>
    					<div className={affiliatestyles.partnerbuttonwrap}><a href="mailto:partners@bizly.com" target="_blank"><button className={affiliatestyles.partnerbutton}>Apply</button></a></div>
    				</div>
    			</div>
    		</div>
    	</div>

    </div>
  );
};

export default Affiliates;