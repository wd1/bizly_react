import React from 'react';
import objectAssign from 'object-assign';

const LocationDropdown = ({styles, selectLocation, isHomepage, location}) => {
  return (
    <span>

      <span className={styles.location + ' hidden-xs'}>
        <select value={location} onChange={(event) => selectLocation( event.target.value, isHomepage )} placeholder="Where do you want to meet?">
          <option value="NY">New York, NY</option>
          <option value="SF">San Francisco, CA</option>
          <option value="CHI">Chicago, IL</option>
          <option value="DC" disabled>Washington, DC (coming soon)</option>
          <option value="BOS" disabled>Boston, MA (coming soon)</option>
          <option value="LA" disabled>Los Angeles, CA (coming soon)</option>
        </select>
      </span>


      <div className='visible-xs-block'>
        <i className={ styles.locationMarker + " fa fa-map-marker" } aria-hidden="true"></i>
        <select placeholder="Where do you want to meet?" className={styles.locationselect} onChange={(event) => selectLocation(event.target.value, isHomepage)}>
          <option value="NY">New York, NY</option>
          <option value="SF" >San Francisco, CA</option>
          <option value="CHI">Chicago, IL</option>
          <option value="DC" disabled>Washington, DC (coming soon)</option>
          <option value="BOS" disabled>Boston, MA (coming soon)</option>
          <option value="LA" disabled>Los Angeles, CA (coming soon)</option>
        </select>
      </div>
    </span>
  );
};

export default LocationDropdown;