import React, { PropTypes } from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import SearchContainer from '../../../Common/Search_Form/SearchContainer';
import styles from './HeroSearch.css';

import Video from 'react-html5video';
import posterimg from '../../../../assets/transparent.png';


const HeroSearch = (props) => {
	return (
		<div className={styles.heroouter}>
			<Jumbotron className={styles.searchHero}>

				<div className={styles.background}>
			        <Video controls autoPlay loop muted
			            poster={posterimg}
			            onCanPlayThrough={() => {
			                // Do stuff
			            }} className={styles.video + " hidden-sm hidden-xs homevid"}>
						  <source src="https://res.cloudinary.com/hdd626jg7/video/upload/v1469421758/BIZLY_Web_Loop_Dark_qaezae.mp4" type="video/mp4" />
						  <source src="https://res.cloudinary.com/hdd626jg7/video/upload/v1469421739/BIZLY_Web_Loop_Dark_texif7.ogv" type="video/ogv" />
						  <source src="https://res.cloudinary.com/hdd626jg7/video/upload/v1469421753/BIZLY_Web_Loop_Dark_diqxit.webm" type="video/webm" />
			        </Video>
				</div>
				<div className={styles.container}>
					<div className="container">
						<div className="row">
							<div className="col-xs-12">
								<div className={styles.centerit}>
									<div className={styles.headContainer}>
										<h1 className={styles.headline + " hidden-xs"}>More than a Meeting Space</h1>
										<div className="hidden-sm hidden-md hidden-lg">
											<span className={styles.headlineMobile + " hidden-sm hidden-md hidden-lg"}>More than a Meeting Space</span>
										</div>
										<h4 className={styles.subline  + " hidden-xs"}>{props.content.subtitle}</h4>
										<h4 className={styles.sublineMobile  + " hidden-sm hidden-md hidden-lg"}>{props.content.subtitle}</h4>
									</div>
									<div className={styles.searchouter}>
										<div className={styles.searchinner}>
											<div className={styles.searchalign}>
												<SearchContainer isHomepage={true} />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Jumbotron>
		</div>
	);
};

HeroSearch.propTypes = {
	content: PropTypes.object
};

export default HeroSearch;