import React from 'react';
import CheckboxGroup from 'react-checkbox-group';
import styles from './AmenitiesFilter.css';

const AmenitiesFilter = ({ amenities, selectedAmenities, onChange }) => {
  return (
    <div>
      <h3>AMENITIES</h3>
      <CheckboxGroup
        name="amenities"
        value={selectedAmenities || []}
        onChange={(checked) => {
          if (onChange) {
            onChange(checked);
          }
        }}
      >
        {
          Checkbox => (
            <div className={styles.amenities}>
              {amenities.map((amenity) => { 
                return (
                  <label key={amenity}>
                    <Checkbox value={amenity}/>
                    {amenity}
                  </label>
                ); 
              })}
            </div>
          )
        }
      </CheckboxGroup>
    </div>
  );
};

export default AmenitiesFilter;

