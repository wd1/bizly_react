import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { switchToSignup, userLoginSubmission, forgotPasswordToggle, loginWithFacebook } from '../actions';
import { LoginValidation as validate } from './validation';
import LoginForm from './LoginForm';

const fields = ['email', 'password'];

const mapStateToProps = (state) => {
	return {
		loggedIn: state.Login.loggedIn,
		errorMessage: state.Login.error.message,
		loading: state.Login.isFetching
	};
}; // add errors here

const mapDispatchToProps = (dispatch) => {
  return {
    submit: (data) => {
      dispatch( userLoginSubmission(data) );
    },
		toggleForgotForm: () => dispatch( forgotPasswordToggle() ),
    loginWithFacebook: () => dispatch( loginWithFacebook() )
  };
};

const formConfig = {
	form: 'UserLogin',
	fields,
	validate
};

const LoginFormContainer = reduxForm(
	formConfig,
	mapStateToProps,
	mapDispatchToProps
)(LoginForm);

export default LoginFormContainer;