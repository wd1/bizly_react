import React, { PropTypes } from 'react';
import RoomListingContainer from './RoomListingContainer';
import RoomModal from './RoomModal';
import styles from './index.css';

const RoomsLayout = ({
  selectedRoomSlug,
  selectedRoom,
  rooms,
  activeLayout,
  show,
  selectRoom,
  closeModal,
  total,
  loggedIn,
  showError,
  orderCreated,
  openLogin,
  notSameRoom,
  messages
}) => {

  // since this is rendering two different instances (MobileLayout & DesktopLayout)
  // there is no need for display: none
  if ( closeModal ) {
    return (
      <div style={ activeLayout ? {display: 'block'} : {display: 'none'} }>
        {mapRooms( rooms, selectedRoom, selectRoom, true )}
        <div className={styles.needhelp}>Need more help?</div>
        <RoomModal room={selectedRoom} show={show} close={closeModal} total={total} orderCreated={orderCreated} loggedIn={loggedIn} showError={showError} openLogin={openLogin} notSameRoom={notSameRoom} messages={messages}/>
      </div>
    );
  } else {
    return (
      <div>
        {mapRooms( rooms, selectedRoom, selectRoom, false )}
      </div>
    );
  }
};

function mapRooms ( rooms, selectedRoom, selectRoom, mobile ) {
  return rooms.map( room => {
    const activeRoom = selectedRoom.id === room.id;

    return (
      <div key={room.id}>
        <RoomListingContainer active={activeRoom} room={room} selectRoom={selectRoom} mobile={mobile}/>
      </div>
    );
  });
};

RoomsLayout.propTypes = {
  rooms: PropTypes.array
};

export default RoomsLayout;