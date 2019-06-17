import { connect } from 'react-redux';
import { processOrder, toggleTermAgreement } from './actions';
import Checkout from './index';

const mapStateToProps = (state, ownProps) => {
  // include promo code if used
  const meeting_details = {
    'host_name': state.Login.info.name,
    'host_email': state.Login.info.email
  }

  const optionalKeys = ['title', 'special_requests', 'host_company', 'host_phone'];

  const optionalDetails = [
    state.Checkout.meetingDetails.meetingTitle,
    state.Checkout.specialRequests,
    state.Checkout.meetingDetails.companyName,
    state.Login.info.phone
  ]

  optionalDetails.forEach( (detail, index) => {
    if ( detail ) meeting_details[ optionalKeys[index] ] = detail;
  });

  const order = {
    credit_card_id: state.Checkout.creditCard.selected,
    meeting_details
  };

  const orderId = state.Cart.orderId;

  const agreed = state.Checkout.agreedToTerms;

  return {
    location: ownProps.location,
    slug: state.PropertyDetails.slug,
    policies: state.PropertyDetails.property.policies,
    orderId,
    agreed,
    readyToBook: agreed && orderId && (order.credit_card_id !== "Add"),
    order,
    showError: state.Checkout.errors.show,
    messages: state.Checkout.errors.messages
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    bookOrder: (id, order) => dispatch( processOrder(id, order) ),
    toggleTerms: () => dispatch( toggleTermAgreement() )
  };
};

const CheckoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);

export default CheckoutContainer;