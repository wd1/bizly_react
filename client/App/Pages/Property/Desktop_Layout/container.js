import { connect } from 'react-redux';
import { selectRoomDesktop } from './actions';
import DesktopLayout from './DesktopLayout';

const mapStateToProps = (state, ownProps) => {
  return {
    property: state.PropertyDetails.property,
    rooms: state.PropertyDetails.property.rooms,
    selectedRoomSlug: state.PropertyDetails.roomSlug,
    selectedRoom: state.PropertyDetails.selectedRoom,
    location: ownProps.location
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openDetails: (slug, room) => dispatch(selectRoomDesktop(slug, room))
  };
};

const DesktopLayoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DesktopLayout);

export default DesktopLayoutContainer;