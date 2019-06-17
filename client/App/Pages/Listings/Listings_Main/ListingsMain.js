import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Listing from './Listing';
import styles from './ListingsMain.css';

const ListingsMain = ({ fetchAttempts, getAllListings, properties, filters }) => {
  if ( fetchAttempts >= 3 ) return (<div>Something went wrong on our end. Please refresh the page</div>);

  // FILTER ALL THE THINGS!
  if (Object.keys(filters).length) {
    if (filters.hasOwnProperty('amenities')) {
      properties = properties.filter((property) => {
        const amenities = property.amenities.filter((amenity) => {
          return (filters.amenities.indexOf(amenity) >= 0);
        });

        return amenities.length == filters.amenities.length;
      });
    }

    if (filters.hasOwnProperty('price')) {
      properties = properties.filter((property) => {
        const min = filters.price[0];
        const max = filters.price[1];
        const price = property.starting_at;

        return (price >= min) && (price <= max);
      });
    }
  }

  return (
    <div>
      {properties.length > 0 ? <div className={styles.instantly}>Bizly is for small group meetings under 40 people and in 30 days or less.  Many hotels offer dramatic discounts on same-week reservations.  Save up to 50% for select rooms this week.</div> : false}
      {properties.length > 0 ? properties.map((listing) => (
        <div key={listing.id}>
          <Listing listing={listing}/>
        </div>
      )) :
        <div className={styles.errornotice}>
          <h1 className={styles.titlehead}>We're sorry, but we don't have any rooms available that match your search. Please revise your criteria.</h1>
          <p><span className={styles.here + ' btn'} onClick={() => getAllListings()}>See All Properties</span></p>
        </div>
      }
    </div>
  );
};

export default ListingsMain;