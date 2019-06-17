import axios from 'axios';
import { extractErrorMessages } from '../functions';

export const CLOSE_REQUEST_MODAL = 'CLOSE_REQUEST_MODAL';

export const closeRequestModal = () => ({ type: CLOSE_REQUEST_MODAL });


export const SUBMITTING_REQUEST_FORM = 'SUBMITTING_REQUEST_FORM';

const submittingRequestForm = () => ({ type: SUBMITTING_REQUEST_FORM });


export const SUBMIT_REQUEST_SUCCESS = 'SUBMIT_REQUEST_SUCCESS';

const formSubmissionSuccess = ({ data }) => (
  {
    type: SUBMIT_REQUEST_SUCCESS,
    data // this is just a string
  }
)

export const SUBMIT_REQUEST_ERROR = 'SUBMIT_REQUEST_ERROR';

const formSubmissionError = ({ errors }) => {
  const messages = extractErrorMessages(errors.messages);
  return {
    type: SUBMIT_REQUEST_ERROR,
    messages
  };
};

export const submitReqForm = (formFields) => {
  return dispatch => {
    dispatch( submittingRequestForm() )
    return axios.post('/api/form/submit', formFields)
      .then( response => dispatch( formSubmissionSuccess(response.data) ))
      .catch( error => dispatch( formSubmissionError(error.data) ));
  }
}