import axios from 'axios';
import { browserHistory } from 'react-router';

export const OPEN_SIGNUP_MODAL = 'OPEN_SIGNUP_MODAL';

export const OPEN_LOGIN_MODAL = 'OPEN_LOGIN_MODAL';
export const CLOSE_LOGIN_MODAL = 'CLOSE_LOGIN_MODAL';

export const SWITCH_TO_LOGIN = 'SWITCH_TO_LOGIN';
export const SWITCH_TO_SIGNUP = 'SWITCH_TO_SIGNUP';

export const USER_SIGNUP = 'USER_SIGNUP';
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
export const USER_SIGNUP_FAIL = 'USER_SIGNUP_FAIL';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';

export const LOGIN_CHECK = 'LOGIN_CHECK';
export const IS_LOGGED_IN = 'IS_LOGGED_IN';
export const NOT_LOGGED_IN = 'NOT_LOGGED_IN';

export const LOG_OUT = 'LOG_OUT';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAIL = 'LOG_OUT_FAIL';

export const SEND_RECOVERY_EMAIL = 'SEND_RECOVERY_EMAIL';
export const RECOVERY_EMAIL_FAIL = 'RECOVERY_EMAIL_FAIL';
export const RECOVERY_EMAIL_SUCCESS = 'RECOVERY_EMAIL_SUCCESS';

export const TOGGLE_FORGOT_PASSWORD = 'TOGGLE_FORGOT_PASSWORD';

export const LOG_OUT_ALERT = 'LOG_OUT_ALERT';

export function forgotPasswordToggle() {
	return {
		type: TOGGLE_FORGOT_PASSWORD
	};
};

export function sendRecoveryEmail(data) {
	return dispatch => {
		dispatch( sendEmail(data) );
		return axios.post('/api/recover/password', data)
			.then(response => dispatch( emailSuccess() ))
			.catch(error => dispatch( emailFail(error) ));
	};
};

function sendEmail({email}) {
	return {
		type: SEND_RECOVERY_EMAIL,
		email
	};
};

function emailSuccess() {
	return {
		type: RECOVERY_EMAIL_SUCCESS
	};
};

function emailFail(error) {
	return {
		type: RECOVERY_EMAIL_FAIL,
		error
	};
};

export function loggingOutUser(shouldRedirect) {
	return dispatch => {
		dispatch( logOut(shouldRedirect) );

	  FB.getLoginStatus(function(res) {
      if (res.authResponse) {
        FB.logout(() => {});
      }
    });

		return axios.get('/api/sign-out')
			.then(response => dispatch( logOutSuccess() ))
			.catch(error => dispatch( logOutFail(error.data) ));
	};
};

function logOut( shouldRedirect ) {
	if (shouldRedirect) browserHistory.push('/');
	return {
		type: LOG_OUT
	};
};

function logOutSuccess() {
	return {
		type: LOG_OUT_SUCCESS
	};
};

function logOutFail(error) {
	return {
		type: LOG_OUT_FAIL,
		error
	};
};

export function checkIfLoggedIn() {
	return dispatch => {
		dispatch(loginCheck());
		return axios.get('/api/login-check')
			.then(res => {
				if (res.data === 'no info') {
					// if user logged in through facebook, login-check should be able
					// tell app if logged in.
					// if we start using FB API calls, we'll need to check login status
					// for now, we do without it
					// FB.getLoginStatus(function(fbres) {
					// 	console.log('checking FB');
					// 	if (fbres.status === 'connected') {
					// 		FB.api('/me', function(response) {
				  //     	const userData = {
				  //         email: response.email,
				  //         name: response.first_name + ' ' + response.last_name,
				  //         social_id: response.id,
				  //         auth_token: fbres.authResponse.accessToken,
				  //         auth_secret: fbres.authResponse.signedRequest,
				  //         provider: 'facebook'
				  //       };

				  //       dispatch( loggedInWithSocial(userData) );
				  //     });
					// 	} else {
					// 		debugger;
					// 		dispatch( notLoggedIn() );
					// 	}
					// }, true);
					dispatch( notLoggedIn() );
				} else {
					dispatch( isLoggedIn( res.data ));
				}
			})
			.catch(error => dispatch( notLoggedIn( error.data )));
	};
};

export function loginWithFacebook(isSignUp) {
	return dispatch => {
		return FB.login(function(res) {
	    if (res.status === 'connected') {
	      FB.api('/me', function(response) {
	      	const userData = {
	          email: response.email,
	          name: response.first_name + ' ' + response.last_name,
	          social_id: response.id,
	          auth_token: res.authResponse.accessToken,
	          auth_secret: res.authResponse.signedRequest,
	          provider: 'facebook'
	        };

	        dispatch( loggedInWithSocial(userData) );

	        if (isSignUp) {
			      dataLayer.push({
					    'event': 'funnel',
					    'eventCategory': 'funnelstage',
					    'eventAction': '1469150359154',
					    'eventLabel': 'Creates Account/Signs Up',
					    'signUpType': 'facebook'
						});
	        }
	      });
	    } else {
	    	dispatch( notLoggedIn() );
	    }
	  }, {scope: 'public_profile,email'});
	};
};

function loggedInWithSocial(user) {
	return dispatch => {
		return axios.post('/api/login-social', user)
			.then((res) => {
				const { data } = res.data;

				const userData = {
					name: data.attributes.name || data.attributes.first_name + ' ' + data.attributes.last_name,
					email: data.attributes.email,
					id: data.id,
					company: data.attributes.company || ''
				}

				dispatch( isLoggedIn( userData ));
			})
			.catch(error => dispatch( notLoggedIn( error.data )));
	}
}

function loginCheck () {
	return {
		type: LOGIN_CHECK
	};
};

export const isLoggedIn = (info) => {
	return {
		type: IS_LOGGED_IN,
		loggedIn: info === 'no info' ? false : true,
		info
	};
};

function notLoggedIn() {
	return {
		type: NOT_LOGGED_IN
	};
};

// add timestamp for logging?
export const openModal = () => {
  return {
    type: OPEN_LOGIN_MODAL
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_LOGIN_MODAL
  };
};

export const openSignupModal = () => {
	return {
		type: OPEN_SIGNUP_MODAL
	};
};

export const switchToSignup = () => {
	return {
		type: SWITCH_TO_SIGNUP
	};
};

export const switchToLogin = () => {
	return {
		type: SWITCH_TO_LOGIN
	};
};

export const userSignupSubmission = (userInfo) => {
	const {firstName, lastName, email} = userInfo;
	userInfo.name = buildName(userInfo);
	return dispatch => {
		dispatch( userSignup({firstName, lastName, email}) );
		return axios.post('/api/register', userInfo)
			.then(response => {
				dispatch( userSignupSuccess( response.data ));
				dataLayer.push({
			    'event': 'funnel',
			    'eventCategory': 'funnelstage',
			    'eventAction': '1469150359154',
			    'eventLabel': 'Creates Account/Signs Up',
			    'signUpType': 'email'
				});
			})
			.catch(error => dispatch( userSignupFail( error.data )));
	}
}

export function signUpWithFacebook() {
	return dispatch => {
		dispatch ( loginWithFacebook(true) );
	}
}

export const userSignup = (userInfo) => {
	return {
		type: USER_SIGNUP,
		name: userInfo.firstName + ' ' + userInfo.lastName,
		email: userInfo.email
	};
};

export const userSignupSuccess = ( result ) => {
	const info = {
		name: result.data.attributes.name || result.data.attributes.first_name + ' ' + result.data.attributes.last_name,
		id: result.data.id,
		company: result.data.attributes.company,
		email: result.data.attributes.email
	}

	return {
		type: USER_SIGNUP_SUCCESS,
		info
	};
};

export const userSignupFail = ( error ) => {
	//console.log('error', error);
	const messages = parseErrors(error.errors.messages);
	return {
		type: USER_SIGNUP_FAIL,
		messages
	};
};

function parseErrors(message) {
	let error = [];
	Object.keys(message).forEach( key => message[key][0] ? error.push(message[key][0]) : '');
	//console.log('prased and all', error);
	return error[0];
}

export const userLoginSubmission = (userInfo) => {
	const {firstName, lastName, email} = userInfo;
	userInfo.name = buildName(userInfo);
	return dispatch => {
		dispatch( userLogin({firstName, lastName, email}) );
		return axios.post('/api/login', userInfo)
			.then(response => dispatch( userLoginSuccess( response.data )))
			.catch(error => dispatch( userLoginFail( error.data )));
	};
};

export const userLogin = (userInfo) => {
	return {
		type: USER_LOGIN,
		email: userInfo.email
	};
};

export const userLoginSuccess = (result) => {
	const info = {
		email: result.data.attributes.email,
		company: result.data.attributes.company,
		name: result.data.attributes.name || result.data.attributes.first_name + ' ' + result.data.attributes.last_name,
		id: result.data.id
	}

	return {
		type: USER_LOGIN_SUCCESS,
		info
	};
};

export const userLoginFail = (error) => {
	return {
		type: USER_LOGIN_FAIL,
		errors: error.errors
	};
};

function buildName (userInfo) {
	return userInfo.firstName + ' ' + userInfo.lastName;
};

export const logOutAlert = () => ( {type: LOG_OUT_ALERT} );