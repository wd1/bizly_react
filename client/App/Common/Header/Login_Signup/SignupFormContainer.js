import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { switchToLogin, userSignupSubmission, signUpWithFacebook } from '../actions';
import { SignupValidation as validate } from './validation';
import SignupForm from './SignupForm';

const fields = ['firstName', 'lastName', 'email', 'password'];

const mapStateToProps = (state) => {
	return {
		showError: state.Login.error.show,
		errorMessage: state.Login.error.message,
		loading: state.Login.isFetching
	};
};

const mapDispatchToProps = (dispatch) => {
  return {
    submit: (data) => {
      dispatch( userSignupSubmission(data) );
    },
    signUpWithFacebook: () => {
      dispatch( signUpWithFacebook() );
    }
  };
};

const formConfig = {
	form: 'UserSignup',
	fields,
	validate
};

const SignupFormContainer = reduxForm(
	formConfig,
	mapStateToProps,
	mapDispatchToProps
)(SignupForm);

export default SignupFormContainer;