import React, { PropTypes } from 'react';
import AddOnContainer from './AddOnContainer';
import styles from './AddOnBox.css';

const AddOnBox = ({amenities, mobile}) => {
  return (
    <div>
      {amenities.map( amenity =>
        <div key={amenity.id} className={styles.amenityadd}>
          <AddOnContainer amenityId={amenity.id} name={amenity.attributes.name} description={amenity.attributes.description} flatRate={amenity.attributes.flat_rate} rate={amenity.attributes.published_rate} policies={amenity.policies} icon={amenity.attributes.icon.src_url} mobile={mobile}/>
        </div>
      )}
    </div>
  )
};

export default AddOnBox;