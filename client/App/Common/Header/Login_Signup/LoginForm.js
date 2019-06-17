import React, { PropTypes } from 'react';
import { Modal, Button, FormGroup, HelpBlock, Col } from 'react-bootstrap';
import LoadingView from '../../Loading_View/LoadingView';
import styles from './LoginModal.css';

const LoginForm = ({ handleSubmit, loginWithFacebook, submit, fields: { email, password }, errorMessage, toggleForgotForm, loading}) => {
	if (loading) return (<LoadingView viewname="signup" loadingText="Checking login..." />);
	return (
		<div>
			<div className={styles.subtitleContainer}>
			  <span className={styles.subtitle}>Sign in to Bizly</span>
			</div>
			<div className={styles.centerText}>
				<div className={errorMessage ? styles.error : styles.noDisplay}>
					{errorMessage}
				</div>
			  <form onSubmit={handleSubmit(submit)}>
			  	<div className="form-group col-sm-12 col-md-6" >
			    	<input type="email" tabIndex={1} autoFocus={true} className={styles.formgroupinput} placeholder="Email address" {...email}/>
			    	<span className="help-block hidden-sm hidden-xs" ><input tabIndex={3} type="checkbox" /> Remember Me</span>
			    </div>
			  	<div className="form-group col-sm-12 col-md-6"  >
			    	<input type="password" tabIndex={2} className={styles.formgroupinput}  placeholder="Password" {...password}/>

			    	<span className="help-block" ><a tabIndex={4} className={styles.forgotlink} onClick={toggleForgotForm}>Forgot Password</a><span className={styles.rememberme}><span className="hidden-sm hidden-md hidden-lg" ><input type="checkbox" /> Remember Me</span></span></span>
			  	</div>
			  	<div className={styles.buttonwrap}>
			    	<Button 
			    		type="submit" 
			    		tabIndex={5} 
			    		className={styles.button} 
			    		onClick={() => {
			    			analytics.track('LOG_IN');
			    		}}>
			    			LOG IN
			    		</Button>
			    </div>
			  </form>
			  <div className={styles.buttonwrap}>
			    <span className={styles.or}>- or -</span>
			  </div>
			  <div className={styles.buttonwrap}>
			  	<Button 
			  		className={styles.facebook} 
			  		onClick={() => { 
			  			loginWithFacebook(); 
			  			analytics.track('LOG_IN_FACEBOOK');
			  		}} 
			  		tabIndex={6}>
			  			SIGN IN WITH FACEBOOK
			  		</Button>
			  </div>
			</div>
		</div>
	)
};

export default LoginForm;