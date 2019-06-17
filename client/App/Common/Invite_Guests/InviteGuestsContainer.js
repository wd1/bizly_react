import { connect } from 'react-redux';
import { closeInvitationSentModal, sendInvitations, updateMeetingDetails } from './InviteGuestsActions';
import InviteGuests from './InviteGuests';

const mapStateToProps = (state) => {
  return {
    inviteConfirmation: state.Reservations.inviteConfirmation
  };
};

const InviteGuestsContainer = connect(
  mapStateToProps,
  {
    closeInvitationSentModal,
    sendInvitations, 
    updateMeetingDetails
  }
)(InviteGuests);

export default InviteGuestsContainer;