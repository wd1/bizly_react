import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import TabSelector from '../../../Common/Tab_Selector/index';
import DetailsPulloutContainer from './DetailsPulloutContainer';
import styles from './RoomListing.css';

// MIGI TODO: onClick add room slug to url
const RoomListing = ({ rate, active, selectRoom, hideListingButton, room, mobile, toggleTab, showDesc, removeRoom }) => {
  if ( room.attributes ) {
    const { attributes: {
      name,
      slug,
      description,
      image_url,
      max_capacity,
      min_duration,
      operation_times
    }, amenities, id } = room;

    const hide = { display: 'none' };

    const hours = min_duration/60;

    const imageStyle = {
      backgroundImage: 'url('+ image_url +')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    };

    const display = active ? {} : { display: 'none' };

    const toggle = () => toggleTab(id);

    if ( mobile ) {
      return (
        <div>
          <div className={styles.roomwrap}>
            <div className={styles.imgouter}><div style={imageStyle} className={styles.hotelimgwrap}/></div>
            <div className={styles.headline}>
              <span className={styles.rateinfo}>${rate}/hr</span>
              <h2 className={styles.roomname}>{name}</h2>
            </div>
            <div className={styles.specsouter}>
              <div className={styles.specsinner}>
                <div className={styles.capacity}>{max_capacity} Capacity</div>
                <div className={styles.vdivider}></div>
                <div className={styles.duration}>{hours} {hours > 1 ? ' Hours' : ' Hour'} Minimum</div>
              </div>
            </div>
            <button style={ hideListingButton ? hide : {} } onClick={() => { if (selectRoom)  return selectRoom(slug, room) } }>SELECT ROOM</button>
          </div>
        </div>
      )
    } else {
      return (

        <div className={styles.roomsouter}>
          <div className={styles.roomcontainer}>
            <div className={styles.roombox}>
              <div className={styles.roominner}>
                <div className={styles.imgouter}><div style={imageStyle} className={styles.hotelimgwrap}/></div>
                  <div className={styles.detailsright}>
                    <TabSelector firstActive={showDesc} toggleTab={toggle} styles={styles} tabNames={['DESCRIPTION', 'DETAILS']}/>
                    <div>
                      <div className={styles.detailswrap} style={ showDesc ? hide : {} } dangerouslySetInnerHTML={{__html: description}}/>
                      <div  className={styles.detailslist}  style={ showDesc ? {} : hide }>
                        <div className={styles.headline}>
                          <span className={styles.rateinfo}>${rate}/hr</span>
                          <h2 className={styles.roomname}>{name}</h2>
                        </div>
                        <div className={styles.specsouter}>
                          <div className={styles.specsinner}>
                            <div className={styles.capacity}>{max_capacity} Capacity</div>
                            <div className={styles.vdivider}></div>
                            <div className={styles.duration}>{hours} {hours > 1 ? ' Hours' : ' Hour'} Minimum</div>
                          </div>
                        </div>
                        <button style={ active ? hide : {} } onClick={() => selectRoom(slug, room) }>SELECT ROOM</button>
                        <button style={ active ? {} : hide} className={styles.selected} onClick={() => removeRoom()}></button>
                      </div>
                    </div>
                  </div>
                  <div style={display} className={styles.detailsdrawer}>
                   <DetailsPulloutContainer amenities={amenities} operationTimes={operation_times} />
                  </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
  // loading view?
  return <div></div>;
};

export default RoomListing;