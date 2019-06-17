import React from 'react';
import { Link } from 'react-router';
import styles from './PropertyTile.css';

const PropertyTile = ({image, slug, name, price, city}) => {
	const imageStyle = {
		backgroundImage: 'url('+ image +')',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat'
	};
	return (
		<div className="col-xs-12 col-md-4">
			<div className={styles.container}>
				<Link to={'/property/' + slug}>
					<div style={imageStyle} className={styles.smallImage}/>
					<div className={styles.barBG}>
						<div className={styles.copy}>
							<span className={styles.name}>{name}</span>
							<span className={styles.cityname}>{city}</span>
							<div className={styles.priceBlock}>
								<span className={styles.startingAt}>Starting at</span><br />
								<span className={styles.price}>&nbsp;${price}/hr</span>
							</div>
						</div>
					</div>
				</Link>
			</div>
		</div>
	)
};

export default PropertyTile;