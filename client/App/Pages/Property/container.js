import { connect } from 'react-redux';
import Property from './index';
import {
  createOrder,
  editReservation,
  editAmenities
} from '../../Common/Cart/actions';
import {
  requestPropertyDetails,
  openRoomModal,
  closeRoomModal
} from './actions';

const mapStateToProps = (state, ownProps) => {

  const guests = state.Search.search.guests;


  let duration = state.Search.search.duration;
  if ( state.PropertyDetails.property.minDuration/60 > state.Search.search.duration ) {
    duration = state.PropertyDetails.property.minDuration/60;
  }

  const shouldCreateOrder = triggerOrderCreation([
    !state.Cart.orderCreated,
    state.Login.loggedIn,
    !state.Cart.creatingOrder,
    state.Search.search.time ? true : false,
    state.PropertyDetails.selectedRoom.attributes.name ? true : false,
    state.Cart.createOrderAttempts < 3
  ]);

  const selectedRoom = state.PropertyDetails.selectedRoom;

  const orderInfo = {
    user_id: state.Login.info.id,
    reservations: [
      {
        room_id: selectedRoom.id,
        date: state.Search.search.date.format('YYYY-MM-DD'),
        start_time: reformatTime(state.Search.search.time),
        duration: duration * 60,
        guests,
        amenities: formatAmenitiesForReq(state.Cart.amenities)
      }
    ]
  };

  const editInfo = {
    room_id: selectedRoom.id,
    date: state.Search.search.date.format('YYYY-MM-DD'),
    start_time: reformatTime(state.Search.search.time),
    duration: duration * 60,
    guests
  };

  return {
    fetched: state.PropertyDetails.fetched,
    isFetching: state.PropertyDetails.isFetching,
    isNewProperty: !(ownProps.params.slug === state.PropertyDetails.slug),
    slug: ownProps.params.slug,
    location: ownProps.location,
    shouldCreateOrder,
    orderInfo,
    shouldEditReservation: state.Cart.shouldEditOrder,
    editingOrder: state.Cart.editingOrder,
    editInfo,
    reservationId: state.Cart.reservationId,
    shouldEditAmenities: state.Cart.shouldEditAmenities,
    amenities: orderInfo.reservations[0].amenities,
    getDetailsAttempts: state.PropertyDetails.getDetailsAttempts,
    createOrderAttempts: state.Cart.createOrderAttempts
  };

  function triggerOrderCreation(arrayOfFactors) {
    return !arrayOfFactors.includes(false);
  };

  function formatAmenitiesForReq(amenities) {
    return amenities.map( amenity => {
      return {
        id: amenity.id,
        quantity: (amenity.remove ? 0 : (amenity.flatRate ? 1 : guests * 1))
      }
    });
  };

  function reformatTime(time) {
    const splitTimeString = time.split(' ');
    const timeOfDay = splitTimeString[1];

    if ( timeOfDay === 'am' ) {
      return splitTimeString[0];
    }

    if ( timeOfDay === 'pm' ) {
      const timeSplit = splitTimeString[0].split(':');
      const hour = timeSplit[0];
      if (hour === '12') return splitTimeString[0];
      return (parseInt(hour) + 12).toString() + ':' + timeSplit[1];
    }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDetails: slug => dispatch( requestPropertyDetails(slug) ),
    createOrder: (cart) => dispatch(createOrder(cart)),
    editReservation: (cart, id) => dispatch(editReservation(cart, id)),
    editAmenities: (amenities, id) => dispatch(editAmenities(amenities, id))
  };
};

const PropertyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Property);

export default PropertyContainer;
