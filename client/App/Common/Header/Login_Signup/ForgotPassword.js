import React from 'react'; 
import styles from './LoginModal.css';

// add prop to determine if message should be shown then dispatch action to close modal
// prop for submit
const ForgotPasswordForm = ({closeModalClick, recoverySuccess, toggleForgotForm, submitRecovery, handleSubmit, fields: { email }}) => {
  if (recoverySuccess) {
    setTimeout(closeModalClick, 2000);
    return (<div>An email was sent to the email provided</div>);
  }

  return (
    <div>
      <div className={styles.subtitleContainer}>
        <span className={styles.subtitle}>Forgot Your Password?</span>
      </div>
      <div className={styles.centerText}>
        <form autoComplete="off" onSubmit={handleSubmit(submitRecovery)}>

            <div className="form-group col-xs-12 col-sm-8 col-sm-offset-2" > 
              <input type="text"  className={styles.formgroupinput}  placeholder="Please enter your email" {...email}/>
 
            </div>
          <div className={styles.buttonwrap}>
            <button type="submit" className={styles.button}>SEND EMAIL</button>
          </div>
        </form>

      </div> 
        <div className={styles.signInSwitch}>
          <div className={styles.returnfooter} onClick={toggleForgotForm}>Return to login</div>
        </div>
    </div>
  );
};

export default ForgotPasswordForm;