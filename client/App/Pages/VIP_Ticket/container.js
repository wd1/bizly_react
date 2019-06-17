import { connect } from 'react-redux';
import { getVipTicket, vipTicketFetchError } from './actions';
import VIPTicketPage from './index';

const mapStateToProps = (state, ownProps) => {
  return {
    reservation: state.VipTicket.reservation,
    showError: state.VipTicket.error.show,
    message: state.VipTicket.error.message,
    fetching: state.VipTicket.fetchingTicket,
    fetched: state.VipTicket.fetchedTicket,
    inviteId: ownProps.params.inviteId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTicket: (inviteId) => dispatch( getVipTicket(inviteId) ),
    fetchError: () => dispatch( vipTicketFetchError('No invite ID') )
  };
};

const VIPTicketPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VIPTicketPage);

export default VIPTicketPageContainer;