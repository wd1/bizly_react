import React, { PropTypes } from 'react';
import TabSelector from '../../../Common/Tab_Selector/index';
import styles from './AddOn.css';

// TOOD : pass in state and action creator for adding and removing amenity from cart
const AddOn = ({ id, name, description, rate, icon, mobile, toggleTab, showDesc, cartAddOn, added, flatRate, orderCreated, disabled, policyMessages }) => {
  const displayNone = {
    display: 'none'
  };

  let showDetails;

  if ( mobile ) {
    showDetails = {};
  } else {
    showDetails = showDesc ? displayNone : {};
  }

  const toggle = () => toggleTab(id);

  return (
    <div className={styles.addonwrap}>
      <div style={ mobile ? displayNone : {} } className={styles.tabsouter}>
        <TabSelector firstActive={showDesc} styles={styles} toggleTab={toggle} tabNames={['DESCRIPTION', 'DETAILS']}/>
      </div>
      <div style={ showDesc ? {} : displayNone } className={styles.addoninner}>
        <div className={styles.amenityimg}><img src={icon} /></div>
        <div className={styles.amenitydets}>
          <div className={styles.amenitytitle}>{name}</div>
          <div className={styles.amenityrate}>${rate}<span className={styles.perperson}>{flatRate ? ' for meeting' : '/person'}</span></div>
          <div className={styles.specialrequest}>+ taxes & fees</div>
        </div>
        { !disabled ?
        <div onClick={() => cartAddOn(id, flatRate, added)}>
          <div className={styles.addicon} style={ added ? displayNone : {}}>Add icon</div>
          <div className={styles.removeicon} style={ added ? {} : displayNone }>Remove icon</div>
        </div>
        :
        <div className={styles.restrictions}>
          {policyMessages.map( (message, index) => (<div key={index}>{message}</div>))}
        </div>
        }
      </div>
      <div className={styles.descriptionouter}>
        <div style={ showDetails } className={styles.descriptionlistheight + " descriptionlist"} dangerouslySetInnerHTML={{__html: description}}/>
      </div>
    </div>
  );
};

export default AddOn;