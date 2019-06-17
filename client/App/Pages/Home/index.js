import React, { PropTypes } from 'react';
import HeroSearchContainer from './Hero_Search/HeroSearchContainer';
import InfoGrid from './Info_Grid/InfoGrid';
import FeatPropertiesContainer from './Featured_Properties/FeatPropertiesContainer';
import AppLink from './App_Link/AppLink';
import MembershipHero from './Membership_Hero/MembershipHero';
import styles from './index.css';



const Home = (props) => {

	const home = props.static.pages.home;

	return (
		<div className={styles.home}>
			<HeroSearchContainer content={home.search} />
			<InfoGrid/>
			<FeatPropertiesContainer content={home.properties} />
			<AppLink/>
			<MembershipHero/>
			<div className={styles.videoouter}>
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-sm-7">
							<div className={styles.videoWrapper}>
								<iframe src="https://player.vimeo.com/video/177284499" width="560" height="315" frameBorder="0" webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe>
							</div>
						</div>
						<div className="col-xs-12 col-sm-5">
							<h3 className={styles.videotitle}>Elevated Possibilities</h3>
							<p className={styles.videotext}>Connect with your team and colleagues outside of your usual workspace and watch the creativity and productivity soar</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Home.propTypes = {
	static: PropTypes.object
};

export default Home;