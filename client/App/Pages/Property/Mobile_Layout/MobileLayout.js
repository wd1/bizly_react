import React, { PropTypes } from 'react';
import TabSelector from '../../../Common/Tab_Selector/index';
import RoomsLayout from '../Rooms_Layout/index';
import AboutLayout from '../About_Layout/index';
import tabStyles from './tabs.css';
import styles from './MobileLayout.css';

// TODO MIGI make sure user can't get to check out if not logged in
const MobileLayout = ({ showRooms, toggle, rooms, showModal, selectedRoom, selectedRoomSlug, selectRoomModal, closeRoomModal, property, total, loggedIn, showError, orderCreated, openLogin, notSameRoom, messages }) => {
  return (
    <div className={tabStyles.roomtabs}>
      <TabSelector firstActive={showRooms} styles={tabStyles} toggleTab={toggle} tabNames={['Rooms', 'About']}/>
      <RoomsLayout activeLayout={showRooms} rooms={rooms} show={showModal} selectedRoom={selectedRoom} selectedRoomSlug={selectedRoomSlug} selectRoom={selectRoomModal} closeModal={closeRoomModal} total={total} orderCreated={orderCreated} loggedIn={loggedIn} showError={showError} openLogin={openLogin} notSameRoom={notSameRoom} messages={messages}/>
      <AboutLayout activeLayout={!showRooms} property={property} toggle={toggle}/>
    </div>
  );
};

MobileLayout.propTypes = {
  showRooms: PropTypes.bool,
  toggle: PropTypes.func,
  rooms: PropTypes.array
};

export default MobileLayout;