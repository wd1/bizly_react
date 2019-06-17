import { connect } from 'react-redux';
import moment from 'moment';
import { toggleAddOnTab, addOnToggleCart, removeAddOnFromCart } from './AddOnActions';
import AddOn from './AddOn';

const mapStateToProps = (state, ownProps) => {
  const policies = ownProps.policies;

  let policyMessages = [];

  let disabled = false;

  const guests = state.Search.search.guests;

  const date = state.Search.search.date;

  const time = state.Search.search.time;

  const dateWithTime = moment(date.format('YYYY-MM-DD') + ' ' + time, 'YYYY-MM-DD hh:mm a');

  const disableAmenityArray = policies.map(shouldBeDisabled);

  if ( disableAmenityArray.includes(true) ) disabled = true;

  const added = state.Cart.amenities.filter(addOn => !addOn.remove).map(addOn => addOn.id).includes(parseInt(ownProps.amenityId));

  const rate = ownProps.rate % 1 !== 0 ? ownProps.rate.toFixed(2) : ownProps.rate;
  return {
    id: ownProps.amenityId,
    name: ownProps.name,
    description: ownProps.description,
    rate,
    icon: ownProps.icon,
    mobile: ownProps.mobile,
    showDesc: !state.PropertyDetails.addOnDetails.includes(ownProps.amenityId),
    added,
    flatRate: ownProps.flatRate,
    orderCreated: state.Cart.orderCreated,
    disabled,
    policyMessages
  };

  function shouldBeDisabled(policy) {
    if ( policy.attributes.name === 'min_amenity_lead_time' ) {
      let earliestBookingTime = moment().add(policy.attributes.value, policy.attributes.units);

      if ( earliestBookingTime.isAfter(dateWithTime) ) {
        policyMessages.push('Must be requested 24 hours prior to room request.');
        return true
      }
      return false;
    }

    if ( policy.attributes.name === 'min_amenity_order_quantity') {
      if (policy.attributes.value > guests) {
        policyMessages.push(`Must have at least ${policy.attributes.value} guests for this add-on.`);
        return true;
      }
    }
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTab: (id) => dispatch( toggleAddOnTab(id) ),
    cartAddOn: (id, flatRate, added) => {
      if ( !added ) {
        return dispatch( addOnToggleCart(id, flatRate) )
      } else {
        return dispatch( removeAddOnFromCart(id) );
      }
    }
  };
};

const AddOnContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddOn);

export default AddOnContainer;