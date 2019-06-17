import React from 'react';
import StaticPagesHeader from './StaticPagesHeader';
import styles from './Press.css';

import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

import skiftSrc from '../../assets/skift.png';
import usaSrc from '../../assets/usatoday.png';
import bizSrc from '../../assets/bizbash.png';
import smartSrc from '../../assets/smart.png';
import wsjSrc from '../../assets/wsj-logo.png';
import cnbcSrc from '../../assets/cnbc-logo.png';
import chicagoSrc from '../../assets/chicago-tribune-logo.png';
import tnoozSrc from '../../assets/tnooz-logo.png';
import tdnSrc from '../../assets/tdn-logo.png';
import bbvSrc from '../../assets/bbv-logo.png';
import twSrc from '../../assets/tweekly-logo.png';
import leSrc from '../../assets/le-logo.png';

const Press = () => {
  return (
    <div className={styles.staticwrap}>
      <StaticPagesHeader active="press"/>
	    <div className={styles.staticinner}>
	    	<Row>
	    		<Col xs={12} className={styles.presshead}>
	      			<h1>Press</h1>
	      		</Col>
	      </Row>
	    	<Row className={styles.pressrow}>
	    		<Col xs={12} sm={3} className={styles.presslogo}>
	      			<a target="_blank"  href="http://www.wsj.com/articles/bizly-raises-funding-for-airbnb-of-conference-rooms-1469705402/"><img src={wsjSrc} /></a>
	      		</Col>
	    		<Col xs={12} sm={3} className={styles.publication}>
	      			<a target="_blank" href="http://www.wsj.com/articles/bizly-raises-funding-for-airbnb-of-conference-rooms-1469705402/">Wall Street Journal</a>
	      		</Col>
	    		<Col xs={12} sm={6} className={styles.presstitle}>
	      			<a target="_blank" href="http://www.wsj.com/articles/bizly-raises-funding-for-airbnb-of-conference-rooms-1469705402/">Bizly Raises Funding for Airbnb of Conference Rooms</a>
	      	</Col>
	      </Row>
	    	<Row className={styles.pressrow}>
	    		<Col xs={12} sm={3} className={styles.presslogo}>
	      			<a target="_blank"  href="http://www.cnbc.com/2016/07/28/need-a-conference-room-fast-this-start-up-has-a-fix.html"><img src={cnbcSrc} /></a>
	      		</Col>
	    		<Col xs={12} sm={3} className={styles.publication}>
	      			<a target="_blank" href="http://www.cnbc.com/2016/07/28/need-a-conference-room-fast-this-start-up-has-a-fix.html">CNBC</a>
	      		</Col>
	    		<Col xs={12} sm={6} className={styles.presstitle}>
	      			<a target="_blank" href="http://www.cnbc.com/2016/07/28/need-a-conference-room-fast-this-start-up-has-a-fix.html">Need a conference room, fast?  This start-up has a fix</a>
	      	</Col>
	      </Row>
	    	<Row className={styles.pressrow}>
	    		<Col xs={12} sm={3} className={styles.presslogo}>
	      			<a target="_blank"  href="http://www.chicagotribune.com/bluesky/originals/ct-bizly-chicago-launch-meetings-bsi-20160728-story.html"><img src={chicagoSrc} /></a>
	      		</Col>
	    		<Col xs={12} sm={3} className={styles.publication}>
	      			<a target="_blank" href="http://www.chicagotribune.com/bluesky/originals/ct-bizly-chicago-launch-meetings-bsi-20160728-story.html">Chicago Tribune</a>
	      		</Col>
	    		<Col xs={12} sm={6} className={styles.presstitle}>
	      			<a target="_blank" href="http://www.chicagotribune.com/bluesky/originals/ct-bizly-chicago-launch-meetings-bsi-20160728-story.html">Bizly wants to take the hassle out of booking a hotel meeting room</a>
	      	</Col>
	      </Row>
	    	<Row className={styles.pressrow}>
	    		<Col xs={12} sm={3} className={styles.presslogo}>
	      			<a target="_blank"  href="https://www.tnooz.com/article/startup-pitch-bizly-helps-hotels-sell-meetings-to-corporates-helps-corporates-get-remote-staff-together/"><img src={tnoozSrc} /></a>
	      		</Col>
	    		<Col xs={12} sm={3} className={styles.publication}>
	      			<a target="_blank" href="https://www.tnooz.com/article/startup-pitch-bizly-helps-hotels-sell-meetings-to-corporates-helps-corporates-get-remote-staff-together/">Tnooz</a>
	      		</Col>
	    		<Col xs={12} sm={6} className={styles.presstitle}>
	      			<a target="_blank" href="https://www.tnooz.com/article/startup-pitch-bizly-helps-hotels-sell-meetings-to-corporates-helps-corporates-get-remote-staff-together/">Bizly helps companies plan and book meetings at hotels</a>
	      	</Col>
	      </Row>
	    	<Row className={styles.pressrow}>
	    		<Col xs={12} sm={3} className={styles.presslogo}>
	      			<a target="_blank"  href="http://www.traveldailynews.com/post/hotel-meeting-rooms-now-available-on-demand-in-new-york-chicago-and-san-francisco"><img src={tdnSrc} /></a>
	      		</Col>
	    		<Col xs={12} sm={3} className={styles.publication}>
	      			<a target="_blank" href="http://www.traveldailynews.com/post/hotel-meeting-rooms-now-available-on-demand-in-new-york-chicago-and-san-francisco">Travel Daily News</a>
	      		</Col>
	    		<Col xs={12} sm={6} className={styles.presstitle}>
	      			<a target="_blank" href="http://www.traveldailynews.com/post/hotel-meeting-rooms-now-available-on-demand-in-new-york-chicago-and-san-francisco">Hotel meeting rooms now available on-demand in New York, Chicago and San Francisco</a>
	      	</Col>
	      </Row>
	    	<Row className={styles.pressrow}>
	    		<Col xs={12} sm={3} className={styles.presslogo}>
	      			<a target="_blank"  href="http://www.thisisgoingtobebig.com/blog/2016/7/28/punching-above-your-weight-as-a-founder-why-i-invested-in-bizly"><img src={bbvSrc} /></a>
	      		</Col>
	    		<Col xs={12} sm={3} className={styles.publication}>
	      			<a target="_blank" href="http://www.thisisgoingtobebig.com/blog/2016/7/28/punching-above-your-weight-as-a-founder-why-i-invested-in-bizly">Brooklyn Bridge Ventures</a>
	      		</Col>
	    		<Col xs={12} sm={6} className={styles.presstitle}>
	      			<a target="_blank" href="http://www.thisisgoingtobebig.com/blog/2016/7/28/punching-above-your-weight-as-a-founder-why-i-invested-in-bizly">Pushing Your Weight as a Founder:  Why I invested in Bizly</a>
	      	</Col>
	      </Row>
	    	<Row className={styles.pressrow}>
	    		<Col xs={12} sm={3} className={styles.presslogo}>
	      			<a target="_blank"  href="http://www.travelweekly.com/Arnie-Weissmann/Curation-countertrend-emerges"><img src={twSrc} /></a>
	      		</Col>
	    		<Col xs={12} sm={3} className={styles.publication}>
	      			<a target="_blank" href="http://www.travelweekly.com/Arnie-Weissmann/Curation-countertrend-emerges">Travel Weekly</a>
	      		</Col>
	    		<Col xs={12} sm={6} className={styles.presstitle}>
	      			<a target="_blank" href="http://www.travelweekly.com/Arnie-Weissmann/Curation-countertrend-emerges">Curation’s Countertrend Emerges</a>
	      	</Col>
	      </Row>
	    	<Row className={styles.pressrow}>
	    		<Col xs={12} sm={3} className={styles.presslogo}>
	      			<a target="_blank"  href="https://www.youtube.com/watch?v=2_iHzSJUD6M"><img src={leSrc} /></a>
	      		</Col>
	    		<Col xs={12} sm={3} className={styles.publication}>
	      			<a target="_blank" href="https://www.youtube.com/watch?v=2_iHzSJUD6M">LE Miami</a>
	      		</Col>
	    		<Col xs={12} sm={6} className={styles.presstitle}>
	      			<a target="_blank" href="https://www.youtube.com/watch?v=2_iHzSJUD6M">Big Ideas:  Hotels as the offices of the future</a>
	      	</Col>
	      </Row>
	    	<Row className={styles.pressrow}>
	    		<Col xs={12} sm={3} className={styles.presslogo}>
	      			<a target="_blank"  href="https://skift.com/2016/01/20/disruption-comes-to-lifestyle-hotels-in-the-form-of-on-demand-meeting-spaces/"><img src={skiftSrc} /></a>
	      		</Col>
	    		<Col xs={12} sm={3} className={styles.publication}>
	      			<a target="_blank" href="https://skift.com/2016/01/20/disruption-comes-to-lifestyle-hotels-in-the-form-of-on-demand-meeting-spaces/">Skift</a>
	      		</Col>
	    		<Col xs={12} sm={6} className={styles.presstitle}>
	      			<a target="_blank" href="https://skift.com/2016/01/20/disruption-comes-to-lifestyle-hotels-in-the-form-of-on-demand-meeting-spaces/">Disruption Comes to Lifestyle Hotels in the Form of On-Demand Meeting Spaces</a>
	      	</Col>
	      </Row>
	    	<Row className={styles.pressrow}>
	    		<Col xs={12} sm={3} className={styles.presslogo}>
	      			<a target="_blank" href="http://roadwarriorvoices.com/2016/01/21/private-meeting-rooms-in-world-class-hotels-are-just-a-swipe-away-with-this-app/"><img src={usaSrc} /></a>
	      		</Col>
	    		<Col xs={12} sm={3} className={styles.publication}>
	      			<a target="_blank" href="http://roadwarriorvoices.com/2016/01/21/private-meeting-rooms-in-world-class-hotels-are-just-a-swipe-away-with-this-app/">USA Today</a>
	      		</Col>
	    		<Col xs={12} sm={6} className={styles.presstitle}>
	      			<a target="_blank" href="http://roadwarriorvoices.com/2016/01/21/private-meeting-rooms-in-world-class-hotels-are-just-a-swipe-away-with-this-app/">Private meeting rooms in world-class hotels are just a swipe away with this app</a>
	      		</Col>
	      </Row>
	    	<Row className={styles.pressrow}>
	    		<Col xs={12} sm={3} className={styles.presslogo}>
	      			<a target="_blank" href="http://www.bizbash.com/how-to-book-hotel-rooms-and-meeting-space-on-the-fly/new-york/story/31857/#.V5f4_JOANBc"><img src={bizSrc} /></a>
	      		</Col>
	    		<Col xs={12} sm={3} className={styles.publication}>
	      			<a target="_blank" href="http://www.bizbash.com/how-to-book-hotel-rooms-and-meeting-space-on-the-fly/new-york/story/31857/#.V5f4_JOANBc">Bizbash</a>
	      		</Col>
	    		<Col xs={12} sm={6} className={styles.presstitle}>
	      			<a target="_blank" href="http://www.bizbash.com/how-to-book-hotel-rooms-and-meeting-space-on-the-fly/new-york/story/31857/#.V5f4_JOANBc">How to Book Hotel Rooms and Meeting Space On the Fly</a>
	      		</Col>
	      </Row>
	    	<Row className={styles.pressrow}>
	    		<Col xs={12} sm={3} className={styles.presslogo}>
	      			<a target="_blank" href="http://www.smartmeetings.com/meeting-planning/83371/book-small-meetings-with-bizly"><img src={smartSrc} /></a>
	      		</Col>
	    		<Col xs={12} sm={3} className={styles.publication}>
	      			<a target="_blank" href="http://www.smartmeetings.com/meeting-planning/83371/book-small-meetings-with-bizly">Smart Meetings</a>
	      		</Col>
	    		<Col xs={12} sm={6} className={styles.presstitle}>
	      			<a target="_blank" href="http://www.smartmeetings.com/meeting-planning/83371/book-small-meetings-with-bizly">Book small meetings in a snap with Bizly</a>
	      		</Col>
	      </Row>
	     </div>
    </div>
  );
};

export default Press;