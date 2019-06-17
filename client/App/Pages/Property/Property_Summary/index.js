import React, { PropTypes } from 'react';
import styles from './index.css';
import desktopStyles from './index-desktop.css';

// MIGI TODO: scroll to top when switching between tabs
const PropertySummary = ({ name, execSummary, amenities, policies, toggle }) => {
  return (
    <div>
      <div className={styles.summarywrap + " visible-xs-block"}>
        <h2 className={styles.summaryhead}>Executive Summary</h2>
        <div className={styles.summaryinner} dangerouslySetInnerHTML={{__html: execSummary}}></div>

        <h2 className={styles.summaryhead}>Terms</h2>
        <div className={styles.summaryinner}>{mapPolicies(policies, styles)}</div>

        <h2 className={styles.summaryhead}>Amenities</h2>
        {mapAmenities(amenities, styles)}
        <button className={styles.viewrooms} onClick={toggle}>View Rooms</button>
      </div>
      <div className="hidden-xs">
        <div className={styles.aboutinner}>
          <h2>ABOUT THIS HOTEL</h2>
          <table className={styles.abouttable}>
            <tbody>
              <tr>
                <th>Hotel Amenities
                </th>
                <td>
                  <div className={styles.amenitiescell}>
                    {mapAmenities(amenities, desktopStyles)}
                  </div>
                </td>
              </tr>
              <tr>
                <th>Executive Summary
                </th>
                <td>
                  <div className={styles.summarycell}>
                    <div dangerouslySetInnerHTML={{__html: execSummary}}/>
                  </div>
                </td>
              </tr>
              <tr>
                <th>Policies
                </th>
                <td>
                  <div className={styles.policycell}>
                    {mapPolicies(policies, desktopStyles)}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

function mapAmenities( amenities, styles ) {
  return amenities.map( amenity =>
    <div className={styles.amenity} key={amenity.id}>
      <div className={styles.icon} ><img src={amenity.attributes.icon.src_url} /></div>
      <div className={styles.amenityname} dangerouslySetInnerHTML={{__html: amenity.attributes.name}}></div>
    </div>
  );
};

function mapPolicies( policies, styles) {
  return policies.map( policy => {
    return (
      <div key={policy.id}>
        {policy.attributes.copy}
      </div>
    )
  });
};

export default PropertySummary;