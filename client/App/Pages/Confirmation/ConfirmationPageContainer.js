import { connect } from 'react-redux';
import ConfirmationPage from './ConfirmationPage';

// data.order.reservations
const mapStateToProps = (state) => {
  return {
    confirmationId: state.Checkout.confirmationId,
    propertyName: state.PropertyDetails.property.name,
    processingOrder: state.Checkout.processingOrder,
    reservation: state.Checkout.reservation,
    showError: state.Checkout.errors.show
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

const ConfirmationPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmationPage);

export default ConfirmationPageContainer;