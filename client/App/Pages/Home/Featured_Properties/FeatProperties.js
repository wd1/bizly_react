import React, { PropTypes } from 'react';
import { Row, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import PropertyTile from './PropertyTile';
import NotifyModalContainer from './Notify_Modal/NotifyContainer';
import styles from './FeatProperties.css';

const FeatProperties = ({properties, isFetching, fetched, getFeatured, notFound, toggleModal}) => {
	if ( !fetched && !isFetching ) getFeatured();

	if ( properties.length > 0 ) {
		return (
			<div className={styles.featProperties}>
				<div className="container">
					<Row className={notFound ? styles.hide : styles.header}>
						<h1 className={styles.headline}>A Setting for Success</h1>
						<h6 className={styles.subline}>Browse spaces at leading hotels for your next meeting, pitch, or presentation</h6>
					</Row>
					<Row className={styles.propertiesGrid}>
						{properties.map((property) =>
							<PropertyTile key={property.index} image={property.image} slug={property.slug} name={property.name} price={property.price} city={property.city}/>
						)}
					</Row>
					<Row>
						<Link to="/properties">
							<Button className={styles.seeAll + ' hidden-sm hidden-md hidden-lg'}>See All</Button>
							<Button className={styles.buttonDesktop + ' hidden-xs'}>See All</Button>
						</Link>
					</Row>
					<Row>
						<div className="col-xs-12">
							<div className={styles.comingsoon}>Coming soon to a city near you. Be the first to know when we arrive! <span className={styles.notify} onClick={() => toggleModal()}>Notify Me</span></div>
						</div>
					</Row>
				</div>
				<NotifyModalContainer/>
			</div>
		);
	} else {
		return (<div></div>);
	}
};

FeatProperties.propTypes = {
  content: PropTypes.object,
  properties: PropTypes.array
};

export default FeatProperties;