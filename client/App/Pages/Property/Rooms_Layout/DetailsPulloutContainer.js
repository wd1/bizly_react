import { connect } from 'react-redux';
import { openModal } from '../../../Common/Header/actions';
import DetailsPullout from './DetailsPullout';

const mapStateToProps = (state, ownProps) => {
  return {
    amenities: ownProps.amenities,
    operationTimes: ownProps.operationTimes,
    loggedIn: state.Login.loggedIn,
    orderCreated: state.Cart.orderCreated,
    total: state.Cart.total,
    showError: state.Cart.errors.show
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openLogin: () => dispatch(openModal())
  };
};

const DetailsPulloutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsPullout);

export default DetailsPulloutContainer;