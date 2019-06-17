import React from 'react';
import StaticPagesHeader from './StaticPagesHeader';
import styles from './Membership.css';
import partnerstyles from './Partnerships.css';
import infostyles from '../Pages/Home/Info_Grid/InfoTile.css';


import roiSrc from '../../assets/icon-roi.png';
import integratedSrc from '../../assets/icon-integrated.png';
import exposureSrc from '../../assets/icon-exposure.png';
import salesSrc from '../../assets/icon-sales.png';

const Partnerships = () => {
  return (
    
    <div className={styles.staticwrap}>
    	<div className={styles.hero + ' ' + partnerstyles.herobg}>
    		<div className="container">
    			<div className="row">
    				<div className="col-xs-12 col-sm-8">
	    				<div className={styles.heroInner}> 
	    					<h1 className={styles.heading}>
	    						Bizly for Leading Hotels
	    					</h1>
	    					<div className={partnerstyles.herodescription}>
	    						Monetize your meeting spaces and serve the modern workforce
	    					</div>
	    					<div className={partnerstyles.herobtnwrap}>
	    						<a href="mailto:partners@bizly.com" target="_blank"><button className={partnerstyles.applybutton}>Apply</button></a>
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
						      <img src={roiSrc} />
						    </div> 
					      	<h3>Immediate ROI</h3>
					      	<div className={infostyles.description}>
					      		Optimize small meeting space availabilities
					      	</div>
				      	</div>
    				</div>
    				<div className="col-xs-6 col-sm-3">
				    	<div className={infostyles.infotile}>
					    	<div className={infostyles.iconwrap}>
						      <img src={integratedSrc} />
						    </div> 
					      	<h3>Integrated</h3>
					      	<div className={infostyles.description}>
					      		Seamlessly part of hotel operations and sales workflow
					      	</div>
				      	</div>
    				</div>
    				<div className="col-xs-6 col-sm-3">
				    	<div className={infostyles.infotile}>
					    	<div className={infostyles.iconwrap}>
						      <img src={exposureSrc} />
						    </div> 
					      	<h3>New Exposure</h3>
					      	<div className={infostyles.description}>
					      		Attract a new market of local professionals
					      	</div>
				      	</div>
    				</div>
    				<div className="col-xs-6 col-sm-3">
				    	<div className={infostyles.infotile}>
					    	<div className={infostyles.iconwrap}>
						      <img src={salesSrc} />
						    </div> 
					      	<h3>Direct Sales</h3>
					      	<div className={infostyles.description}>
					      		White label solutions for direct and spill-over revenue
					      	</div>
				      	</div>
    				</div>
    			</div>
    		</div>
    	</div>
    	<div className={styles.betaoffer + ' ' + partnerstyles.applybox}>
    		<div className="container">
    			<div className="row">
    				<div className="col-xs-12 ">
    					<h3>Apply Now</h3>
    					<div className={partnerstyles.exclusively}>Exclusively for four- and five-star hotels with private meeting rooms</div>
    					<div className={partnerstyles.applybuttonwrap}><a href="mailto:partners@bizly.com" target="_blank"><button className={partnerstyles.invertbutton}>Apply</button></a></div>
    				</div>
    			</div>
    		</div>
    	</div>
    	<div className={styles.spaces + ' ' + partnerstyles.howitworks}>
    		<div className="container">
    			<div className="row">
    				<div className="col-xs-12 col-sm-6">
    					<h2>How it Works</h2>
    						<p className={styles.spacesdescription}>Our solution was built by hotels, for hotels to fit seamlessly into every operation - from boutique independents to global elite brands
							</p>
							<ul className={partnerstyles.bullets}>
								<li>Create listing</li>
								<li>Set prices &amp; amenities</li>
								<li>Update inventory in real-time</li>
								<li>Alert routing</li>
								<li>CRM &amp; Analytics</li>
								<li>Direct Booking Tools</li>
							</ul>
    				</div>
    			</div>
    		</div>
    	</div>
    	<div className={styles.memorable + ' ' + partnerstyles.joinbox}>
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
    					<h3>Join our Portfolio of Leading Hotels</h3>
    					<div className={styles.logoquilt}> </div>
    					<div className={partnerstyles.partnerbuttonwrap}><a href="mailto:partners@bizly.com" target="_blank"><button className={partnerstyles.partnerbutton}>Apply</button></a></div>
    				</div>
    			</div>
    		</div>
    	</div> 

    </div>
  );
};

export default Partnerships;