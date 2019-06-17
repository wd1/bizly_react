import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import styles from './index.css';
import SignupFormContainer from '../../Common/Header/Login_Signup/SignupFormContainer';

const Registration = ({ loggedIn, name, redirect }) => {
  if (loggedIn) setTimeout(redirect, 2000);

  return (
    <div className={styles.container}>
      { loggedIn ?
      <h1>{`Welcome to Bizly, ${name}!`}</h1> :
      <div>
        <h1>Sign Up</h1>
        <SignupFormContainer/>
      </div>
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.Login.loggedIn,
    name: state.Login.info.name
  }
};

const mapDispatchToProps = (dispatch) => (
  {
    redirect: () => browserHistory.push('/')
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registration);