import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {
  openModal,
  openSignupModal,
  closeModal,
  switchToSignup,
  switchToLogin,
  checkIfLoggedIn,
  loggingOutUser,
  logOutAlert
} from './actions';

const mapStateToProps = (state, ownProps) => {
  return {
    showModal: state.Login.showModal,
    signupForm: state.Login.signupForm,
    loggedIn: state.Login.loggedIn,
    name: state.Login.info.name,
    checkingLogin: state.Login.checkingLogin,
    loginCheck: state.Login.loginCheck,
    version: 'Bizly ' + ownProps.version,
    forgotPassword: state.Login.forgotPassword,
    static: ownProps.static,
    alert: state.Login.logOutAlert,
    onRegPage: state.routing.locationBeforeTransitions.pathname === '/registration'
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    openModalClick: () => {
      dispatch( openModal() );
    },
    openSignup: () => {
      dispatch( openSignupModal() );
    },
    closeModalClick: () => {
      dispatch( closeModal() );
    },
    switchToLoginClick: () => {
      dispatch( switchToLogin() );
    },
    switchToSignupClick: () => {
      dispatch( switchToSignup() );
    },
    checkIfLoggedIn: () => {
      dispatch( checkIfLoggedIn() );
    },
    logOutAlert: () => dispatch( logOutAlert() ),
    signOut: (shouldAlert, shouldRedirect) => {
      if ( shouldAlert ) {
        return dispatch( logOutAlert() );
      }

      return dispatch( loggingOutUser(shouldRedirect) );
    }
  };
};

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;