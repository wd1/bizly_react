import { connect } from 'react-redux';
import { openModal } from '../../../Common/Header/actions';
import { toggleMobileView, openRoomModal, closeRoomModal } from './actions';
import MobileLayout from './MobileLayout';

// mimic state from cart for triggering order
const mapStateToProps = (state) => {
  const selectedRoom = state.PropertyDetails.selectedRoom;

  const notSameRoom = selectedRoom.id !== state.Cart.roomId;

  const errorObj = state.Cart.errors.messages;

  let messages = [];

  if ( Object.keys(errorObj).length > 0 ) {
    for (let errorType in errorObj) {
      if (errorObj[errorType].length > 0) {
        messages = messages.concat(errorObj[errorType].map(message => message));
      }
    }
  }

  return {
    showRooms: state.PropertyDetails.showRooms, // TODO MIGI represent tab in url params
    rooms: state.PropertyDetails.property.rooms,
    showModal: state.PropertyDetails.roomModal,
    selectedRoomSlug: state.PropertyDetails.roomSlug,
    selectedRoom: state.PropertyDetails.selectedRoom,
    property: state.PropertyDetails.property,
    loggedIn: state.Login.loggedIn,
    orderCreated: state.Cart.orderCreated,
    total: state.Cart.total,
    showError: state.Cart.errors.show,
    notSameRoom,
    messages
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggle: () => dispatch( toggleMobileView() ),
    selectRoomModal: (roomSlug, room) => dispatch( openRoomModal(roomSlug, room) ),
    closeRoomModal: () => dispatch( closeRoomModal() ),
    openLogin: () => dispatch( openModal() )
  };
};

const MobileLayoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileLayout);

export default MobileLayoutContainer;