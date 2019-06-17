import React, { PropTypes } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router';
import styles from './Footer.css';

const Footer = (props) => {
	return (
		<div className={styles.container}>
			<div className={styles.socialContainer}>
				{props.static.social.map( (icon, index) =>
					<span key={icon.label} className={index !== 3 ? styles.iconMargin : '' }>
						<a href={icon.url} target="_blank" className={styles.socialLink}><i className={icon.icon}></i></a>
					</span>
				)}
			</div>
			<div className={styles.linksContainer}>
				<div className={styles.containerWidth}>
					<span className={styles.rowLabel}>COMPANY</span>
					<div className={styles.listLinks}>
						{props.static.company.map(mapFooterLinks)}
					</div>
				</div>
				<div className={styles.containerWidth}>
					<span className={styles.rowLabel}>Discover</span>
					<div className={styles.listLinks}>
						{props.static.partners.map(mapFooterLinks)}
					</div>
				</div>
				<div className={styles.containerWidth}>
					<span className={styles.rowLabel}>Cities</span>
					<div className={styles.listLinks}>
						{props.static.cities.map(mapFooterLinks)}
					</div>
				</div>
			</div>
			<div>
				<span className={styles.copyright}>2016 &copy; BIZLY, Inc. All Rights Reserved.</span>
			</div>
		</div>
	);
};

Footer.propTypes = {
	static: PropTypes.object
};

export default Footer;

// add logic to handle links to outside web app
function mapFooterLinks (link, index, arr) {
	return (
		<Link to={link.link} key={link.label} target="_blank">
			<span className={styles.linkBlock}>
				{link.label}
				<span className={ index !== (arr.length - 1) ? styles.border : styles.none }><span className="hidden-xs">|</span></span>
			</span>
		</Link>
	);
};