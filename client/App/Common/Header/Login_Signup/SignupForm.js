import React, { PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';
import LoadingView from '../../Loading_View/LoadingView';
import styles from './LoginModal.css';

const SignupForm = ({ handleSubmit, signUpWithFacebook, submit, fields: { firstName, lastName, email, password }, showError, errorMessage, loading}) => {
	if (loading) return (<LoadingView viewname="signup" loadingText="Submitting your info..." />);
	return (
		<div>
			<div className={styles.subtitleContainer}>
			  <span className={styles.subtitle}>Sign up with Bizly to access exclusive meeting experiences and perks.</span>
			</div>
			<div className={styles.centerText}>
				<div className={showError ? styles.error : styles.noDisplay}>
					{errorMessage}
				</div>
			  <form onSubmit={handleSubmit(submit)}>
			    <input type="text" tabIndex={1} autoFocus={true} className={styles.firstBox} placeholder="First name" {...firstName}/>
			    <input type="text" tabIndex={2} className={styles.halfBox} placeholder="Last name" {...lastName}/>
			    <input type="email" tabIndex={3} className={styles.firstBox} placeholder="Email address" {...email}/>
			    <input type="password" tabIndex={4} className={styles.halfBox} placeholder="Password" {...password}/>
			    <div className={styles.buttonwrap}>
			   	 <Button 
			   	 		type="submit" 
			   	 		tabIndex={5} 
			   	 		className={styles.button}
			   	 		onClick={() => {
			   	 			analytics.track('CREATE_ACCOUNT');
			   	 		}}>
			   	 			CREATE ACCOUNT
			   	 		</Button>
			  	</div>
			  </form>
			  <div className={styles.buttonwrap}>
			    <span className={styles.or}>- or -</span>
			  </div>
			    <div className={styles.buttonwrap}>
			  		<Button 
				  		tabIndex={6} 
				  		className={styles.facebook} 
				  		onClick={() => {
				  			signUpWithFacebook();
			   	 			analytics.track('CREATE_ACCOUNT_FACEBOOK');
			   	 		}}>
			   	 			SIGN UP WITH FACEBOOK
			   	 		</Button>
			  	</div>
			</div>
		</div>
	)
};

export default SignupForm;