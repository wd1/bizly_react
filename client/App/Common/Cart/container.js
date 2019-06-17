import { connect } from 'react-redux';
import objectAssign from 'object-assign';
import { addOnToggleCart } from '../../Pages/Property/Rooms_Layout/AddOnActions';
import { openModal } from '../Header/actions';
import { removePromoCode } from './Promo_Code/PromoCodeFormActions';
import { removeRoom } from './actions';
import Cart from './Cart';

const mapStateToProps = (state, ownProps) => {
  const orderCreated = state.Cart.orderCreated;
  const guests = state.Search.search.guests;

  const lineItems = state.Cart.lineItems;

  let duration = state.Search.search.duration;
  if ( state.PropertyDetails.property.minDuration/60 > state.Search.search.duration ) {
    duration = state.PropertyDetails.property.minDuration/60;
  }

  const selectedRoom = state.PropertyDetails.selectedRoom;

  const roomRate = selectRoomRate();

  function selectRoomRate() {
    if ( selectedRoom.ratePlans.length > 0 ) {

      if ( selectedRoom.ratePlans.length === 1 ) return selectedRoom.ratePlans[0].attributes.published_rate;

      if ( state.Cart.isWithinWeek ) {
        return selectedRoom.ratePlans[1].attributes.published_rate;
      } else {
        return selectedRoom.ratePlans[0].attributes.published_rate;
      }
    }
    return 0;
  };

  const addOnIds = state.Cart.amenities.filter(addOn => !addOn.remove).map(addOn => addOn.id);

  let total = orderCreated ? state.Cart.total : (duration * roomRate || 0);

  const addOnsRaw = selectedRoom.amenities.filter(pickActiveAmenities);

  let addOns = [];

  const room = {};

  if ( lineItems.length > 0 ) {
    addOnsRaw.forEach( addOn => {
      lineItems.forEach( lineItem => {
        if ( parseInt(addOn.id) === lineItem.id ) {
          addOns.push(objectAssign({}, addOn, lineItem));
        }
      });
    });

    // no hourly rate for room
    if ( lineItems[0].type === 'room' ) {
      room.total = lineItems[0].total;
      room.taxes = lineItems[0].taxes;
      room.fees = lineItems[0].fees;
    }
  }

  if ( !state.Cart.orderCreated ) {
    addOnsRaw.forEach(addToTotal);
    addOns = addOnsRaw;
  }

  const placeholderImg = 'https://res.cloudinary.com/hdd626jg7/image/upload/v1467379189/Bizly.com/missing_image.jpg';

  const roomImg =  state.Cart.roomImg !== placeholderImg ? state.Cart.roomImg : state.PropertyDetails.property.image;

  const errorObj = state.Cart.errors.messages;

  let messages = ["There seems to be a conflict with the times you’ve chosen."];

  // if ( Object.keys(errorObj).length > 0 ) {
  //   for (let errorType in errorObj) {
  //     if (errorObj[errorType].length > 0) {
  //       messages = messages.concat(errorObj[errorType].map(message => message));
  //     }
  //   }
  // }

  let rate;
  const hourlyRateRoom = state.PropertyDetails.selectedRoom;
  if (hourlyRateRoom.ratePlans.length > 0) {
    rate = hourlyRateRoom.ratePlans[0].attributes.published_rate || 0;
  }


  if ( state.Cart.isWithinWeek ) {
    if ( hourlyRateRoom.ratePlans.length > 1 ) {
      rate = hourlyRateRoom.ratePlans[1].attributes.published_rate;
    }
  }

  return {
    isStatic: ownProps.static,
    isAbsolute: ownProps.absolute,
    propertyName: state.PropertyDetails.property.name,
    date: state.Search.search.date,
    time: state.Search.search.time,
    roomName: selectedRoom.attributes.name,
    loggedIn: state.Login.loggedIn,
    orderCreated,
    showError: state.Cart.errors.show,
    messages,
    roomImg,
    guests,
    duration,
    addOns,
    roomRate,
    total,
    room,
    roomId: state.PropertyDetails.selectedRoom.id,
    rate,
    editingReservation: state.Cart.editingOrder,
    promo: state.Cart.promo,
    selectedRoom: state.PropertyDetails.selectedRoom,
    orderId: state.Cart.orderId,
    removingCode: state.Cart.promo.removing
  };

  function pickActiveAmenities(amenity) {
    if ( addOnIds.length < 1 ) return false;

    if ( addOnIds.includes(parseInt(amenity.id)) ) return true;

    return false;
  };

  function addToTotal(addOn) {
    if ( addOn.attributes.units.toLowerCase() === 'person' ) {
      total+=(guests * addOn.attributes.published_rate);
    } else {
      total+=(addOn.attributes.published_rate);
    }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeRoom: () => dispatch( removeRoom() ),
    removeAddOn: (id) => dispatch( addOnToggleCart(id) ),
    removePromoCode: (id) => dispatch( removePromoCode(id) ),
    openLogin: () => dispatch(openModal())
  };
};

const CartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

export default CartContainer;