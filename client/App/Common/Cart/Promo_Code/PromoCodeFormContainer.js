import { connect } from 'react-redux';
import { applyPromoCode, promoCodeFormError } from './PromoCodeFormActions';
import PromoCodeForm from './PromoCodeForm';

const mapStateToProps = (state, ownProps) => {
  return {
    orderId: state.Cart.orderId,
    showError: state.Cart.promo.errors.show,
    error: state.Cart.promo.formError || state.Cart.promo.errors.messages || '', // add extra case for API errors
    promoCodeAccepted: state.Cart.promo.accepted
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submit: (data) => submitAndValidateForm(data, dispatch)
  };
};

const PromoCodeFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PromoCodeForm);

export default PromoCodeFormContainer;

function submitAndValidateForm(event, dispatch) {
  event.preventDefault();
  const promo = event.target[0].value;
  const id = event.target[1].value;
  const error = validate(promo);
  const data = { promo, id };

  if ( error ) {
    return dispatch(promoCodeFormError(error));
  } else {
    return dispatch(applyPromoCode(data));
  }
}

function validate(promo) {
  if (!promo) return 'Please provide a valid promo code';
  if (promo.length > 25) return 'Promo code must not be longer than 25 characters';
  if (!/^[a-zA-Z0-9'-\s]*$/.test(promo)) return 'Please limit promo code to alphanumeric characters';
  return '';
};