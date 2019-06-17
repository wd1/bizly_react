import React, { PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';
import SignupFormContainer from './SignupFormContainer';
import LoginFormContainer from './LoginFormContainer';
import ForgotPasswordContainer from './ForgotPasswordContainer';
import styles from './LoginModal.css';

const LoginModal = ({ showModal, closeModalClick, signupForm, switchToLoginClick, switchToSignupClick, loggedIn, name, forgotPassword }) => {
  const showBlock = { display: 'block'};
  const hideBlock = { display: 'none'};

  if ( loggedIn && showModal ) setTimeout(closeModalClick, 2000);

  return (
    <Modal show={showModal} onHide={closeModalClick}>
      <Modal.Header closeButton>
        <Modal.Title className={styles.title}>{signupForm ? 'SIGN UP' : 'LOGIN'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={styles.brandContainer}><span className={styles.brand}/></div>
        {loggedIn ? (
        <div style={loggedIn ? showBlock : hideBlock}>
          <h3 className={styles.welcome}>Welcome, {name}!</h3>
        </div>
        ) : (
        <div style={loggedIn ? hideBlock : showBlock}>
          {signupForm ? (
          <div>
            <SignupFormContainer/>
            <div className={styles.signInSwitch}>Already have an account? <span tabIndex={6} onClick={switchToLoginClick} className={styles.signIn}>Sign in</span> here</div>
          </div>
          ) : (
          <div>
            { forgotPassword ? ( <ForgotPasswordContainer/> ) : (
              <div>
                <LoginFormContainer/>
                <div className={styles.signInSwitch}>Don't have an account? <span tabIndex={6} onClick={switchToSignupClick} className={styles.signIn}>Sign up</span> here</div>
              </div>
            )}
          </div>
          )}
        </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

LoginModal.propTypes = {
  showModal: PropTypes.bool,
  closeModal: PropTypes.func
};

export default LoginModal;