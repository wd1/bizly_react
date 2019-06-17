import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Listing.css';

const Listing = ({
  listing: {
    propertyId,
    slug,
    name,
    display_address,
    image_url,
    starting_at,
    min_duration,
    max_capacity,
    tags
  }
}) => {
  const imageStyle = {
    backgroundImage: 'url('+ image_url +')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };
  return (
    <div className={styles.hotelbox + ' '}>
      <Link to={"/property/"+slug}>
        <div style={imageStyle} className={styles.hotelimgwrap}></div>
        <div className={styles.hoteldets}>
          <div className={styles.price}><span  className={styles.startingat}>Starting at</span><span className={styles.pricenumber}>${starting_at}</span></div>
          <div className={styles.hotelname}>{name}</div>
          <div className={styles.address}>{display_address}</div>
          <div className={styles.tagpillwrap}>
            { tags.length > 0 ? <span className={styles.tagpill}>{tags[0].attributes.name}</span> : false }
          </div>
          <div className={styles.capcityhourswrap}>
            <div className={styles.capacity}>UP TO {max_capacity} GUESTS</div>
            <div className={styles.vdivider}></div>
            <div className={styles.duration}>{min_duration/60} Hours Minimum</div>
          </div>
          <div className={styles.unavailabletext}>Unavailable</div>
        </div>
      </Link>
    </div>
  );
};

export default Listing;