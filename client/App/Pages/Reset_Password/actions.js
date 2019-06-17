import axios from 'axios';

export const PASSWORD_RESET_REQUESTED = 'PASSWORD_RESET_REQUESTED';

const passwordResetRequested = () => ({type: PASSWORD_RESET_REQUESTED});

export const PASSWORD_RESET_SUCCESS = 'PASSWORD_RESET_SUCCESS';

const passwordResetSuccess = (data) => {
  return {
    type: PASSWORD_RESET_SUCCESS,
    data
  };
};

export const PASSWORD_RESET_ERROR = 'PASSWORD_RESET_ERROR';

const passwordResetError = (data) => {
  return {
    type: PASSWORD_RESET_ERROR,
    data
  }
}

export const resetPassword = (resetObj) => {
  return dispatch => {
    dispatch( passwordResetRequested() );
    return axios.post('/api/reset/password', resetObj)
      .then(response => dispatch( passwordResetSuccess(response.data) ))
      .catch(error => dispatch( passwordResetError(error.data) ));
  };
};