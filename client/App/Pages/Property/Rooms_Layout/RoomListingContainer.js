import { connect } from 'react-redux';
import objectAssign from 'object-assign';
import { toggleRoomTab } from './RoomListingActions';
import { removeRoom } from '../../../Common/Cart/actions';
import RoomListing from './RoomListing';

const mapStateToProps = (state, ownProps) => {
  const room = ownProps.room;
  let rate = 0;

  if (room.ratePlans.length > 0) {
    rate = room.ratePlans[0].attributes.published_rate || 0;
  }


  if ( state.Cart.isWithinWeek ) {
    if ( room.ratePlans.length > 1 ) {
      rate = room.ratePlans[1].attributes.published_rate;
    }
  }

  return {
    room,
    active: state.PropertyDetails.selectedRoom.id === ownProps.room.id,
    mobile: ownProps.mobile ? true : false,
    showDesc: !state.PropertyDetails.roomDetails.includes(ownProps.room.id),
    rate
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    selectRoom: ownProps.selectRoom,
    toggleTab: (id) => dispatch(toggleRoomTab(id)),
    removeRoom: () => dispatch(removeRoom())
  };
};

const RoomListingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomListing);

export default RoomListingContainer;