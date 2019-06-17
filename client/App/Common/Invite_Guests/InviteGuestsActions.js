const axios = require('axios');

export const CONFIRMATION_TOGGLE = 'CONFIRMATION_TOGGLE';
export const INVITATIONS_SENDING = 'INVITATIONS_SENDING';
export const INVITATIONS_SENT = 'INVITATIONS_SENT';
export const INVITATIONS_ERROR = 'INVITATIONS_ERROR';
export const UPDATE_MEETING_DESCRIPTION = 'UPDATE__MEETING_DESCRIPTION';
export const UPDATED_MEETING_DESCRIPTION = 'UPDATED_MEETING_DESCRIPTION';
export const UPDATE_MEETING_DESCRIPTION_ERROR = 'UPDATE_MEETING_DESCRIPTION_ERROR';
export const CLOSE_INVITATION_SENT_MODAL = 'CLOSE_INVITATION_SENT_MODAL';

function confirmationToggle() {
  return {
    type: CONFIRMATION_TOGGLE
  };
};

function updatingMeetingDetails() {
  return {
    type: UPDATE_MEETING_DESCRIPTION
  };
};

function updatedMeetingDetails() {
  return {
    type: UPDATED_MEETING_DESCRIPTION
  };
};

function updateMeetingDetailsError() {
  return {
    type: UPDATE_MEETING_DESCRIPTION_ERROR
  };
};

function invitationsSending() {
  return {
    type: INVITATIONS_SENDING
  };
}

function invitationsSent() {
  return {
    type: INVITATIONS_SENT
  };
}

function invitationsError() {
  return {
    type: INVITATIONS_ERROR
  };
}

export function closeInvitationSentModal() {
  return {
    type: CLOSE_INVITATION_SENT_MODAL
  };
}

export function updateMeetingDetails(id, details) {
  return dispatch => {
    dispatch( updatingMeetingDetails() );
    return axios.post('api/order/details/' + id, details)
      .then(response => {
        console.log('updateMeetingDetails', response);
        dispatch( updatedMeetingDetails() );
      })
      .catch(error => dispatch( updateMeetingDetailsError() ));
  } 
}

export function sendInvitations(id, invitations) {
  return dispatch => {
    dispatch( invitationsSending() );
    return axios.post('api/' + id + '/invitations', invitations)
      .then(response => {
        console.log('sendInvitations', response);
        dispatch( invitationsSent() );
      })
      .catch(error => dispatch( invitationsError() ));
  }
};