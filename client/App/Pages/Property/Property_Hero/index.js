import React, { PropTypes } from 'react';
import { Carousel } from 'react-bootstrap';
import styles from './index.css';

const PropertyHero = ({ name, image, images, tags, address }) => {


	const imageStyle = (img) => (
	  {
			backgroundImage: 'url('+ img +')',
	  	backgroundSize: 'cover',
	  	backgroundPosition: 'center',
	  	backgroundRepeat: 'no-repeat'
		}
	);

	let tag;
	if ( tags.length > 0 ) {
		tag = tags[0].attributes.name;
	} else {
		tag = '';
	}

  return (
		<div className={styles.imgouter}>
			<Carousel>
				{images.map(img =>
					<Carousel.Item key={img.id}>
						<div style={imageStyle(img.attributes.image_url)} className={styles.hotelimgwrap}/>
					</Carousel.Item>
				)}
			</Carousel>
			<div className={styles.bgoverlay}>
				<div className={styles.overlayinner}>
					<div className="container">
						<div className="row">
							<div className="col-xs-12">
								<h1>{name}</h1>
								<span className={styles.tagtype}>{tag}</span><br />
								<span className={styles.address}>{address}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  );
};

export default PropertyHero