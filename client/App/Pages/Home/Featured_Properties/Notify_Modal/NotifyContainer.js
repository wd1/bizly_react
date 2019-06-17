import { connect } from 'react-redux';
import { toggleNotifyModal } from '../actions';
import NotifyModal from './NotifyModal';

const mapStateToProps = (state, ownProps) => {
  return {
    show: state.Homepage.Properties.notifyMe
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: () => dispatch( toggleNotifyModal() )
  };
}

const NotifyModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NotifyModal);

export default NotifyModalContainer;