import React from 'react';
import { browserHistory } from 'react-router';
import styles from './index.css';

const ResetPassword = ({email, token, submit, showError, message, success}) => {
  if ( success ) {
    setTimeout( () => browserHistory.push('/'), 2500 );
  }

  return (
    <div className={styles.staticwrap}>
      <div  className={styles.formouter + ' container'}>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-sm-offset-3  ">
              <h1 className={styles.heading}>Reset Your Password</h1>
      { success ? <div className={styles.successwrap}>Your password was successfully changed. You will be redirected shortly</div> : false}
      { showError ? <div className={styles.errorwrap}>{message}</div> : false}
            <form name="resetPassword" onSubmit={submit}>
              <input type="hidden" name="email" value={email}/>
              <input type="hidden" name="token" value={token}/>
               <div className="row">

                  <div className="form-group col-sm-12 col-md-6" >
                    <label className={styles.labelitem}>Enter your new password:</label>
                                      </div>

                  <div className="form-group col-sm-12 col-md-6" >
                    <input type="password" name="password" tabIndex={1} autoFocus={true} className={styles.formgroupinput}  />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-sm-12 col-md-6" >
                    <label className={styles.labelitem}>Confirm your new password:</label>
                                      </div>

                  <div className="form-group col-sm-12 col-md-6" >
                    <input type="password" name="passwordConfirmation" tabIndex={2} autoFocus={true} className={styles.formgroupinput}  />
                  </div>

                  <div className={styles.buttonrow}><button type="submit">SUBMIT</button></div>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;