import objectAssign from 'object-assign';
import {
	OPEN_LOGIN_MODAL,
	OPEN_SIGNUP_MODAL,
	CLOSE_LOGIN_MODAL,
	SWITCH_TO_LOGIN,
	SWITCH_TO_SIGNUP,
	USER_SIGNUP,
	USER_SIGNUP_SUCCESS,
	USER_SIGNUP_FAIL,
	USER_LOGIN,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAIL,
	LOGIN_CHECK,
	IS_LOGGED_IN,
	NOT_LOGGED_IN,
	LOG_OUT,
	LOG_OUT_FAIL,
	LOG_OUT_SUCCESS,
	SEND_RECOVERY_EMAIL,
	RECOVERY_EMAIL_FAIL,
	RECOVERY_EMAIL_SUCCESS,
	TOGGLE_FORGOT_PASSWORD,
	LOG_OUT_ALERT
} from './actions';
import { PASSWORD_RESET_REQUESTED, PASSWORD_RESET_SUCCESS, PASSWORD_RESET_ERROR } from '../../Pages/Reset_Password/actions';

const loginInitialState = {
	loggedIn: false,
	checkingLogin: false,
	loginCheck: false,
	isFetching: false,
	showModal: false,
	forgotPassword: false,
	signupForm: true,
	logOutAlert: false,
	recovery: {
		sending: false,
		success: false
	},
	passwordReset: {
		sending: false,
		success: false,
		error: {
			show: false,
			message: ''
		}
	},
	info: {
		name: '',
		email: '',
		id: null,
		company: ''
	}, // may need to expand this to include other useful info
	error: {
		show: false,
		message: ''
	}
};

const Login = ( state = loginInitialState, action ) => {
	switch (action.type) {
		case OPEN_LOGIN_MODAL:
			return objectAssign({}, state, {showModal:true, signupForm: false});
		case CLOSE_LOGIN_MODAL:
			return objectAssign({}, state, {showModal:false, error: {message: ''}, forgotPassword: false, recovery: {sending: false, success: false}});
		case OPEN_SIGNUP_MODAL:
			return objectAssign({}, state, {showModal:true, signupForm: true});
		case SWITCH_TO_LOGIN:
			return objectAssign({}, state, {signupForm: false});
		case SWITCH_TO_SIGNUP:
			return objectAssign({}, state, {signupForm: true});
		case LOGIN_CHECK:
			return objectAssign({}, state, {checkingLogin: true});
		case USER_SIGNUP:
		case USER_LOGIN:
			return objectAssign({}, state, {isFetching: true, info: loginSignupInfo(state.info, action), error: loginInitialState.error});
		case USER_SIGNUP_SUCCESS:
		case USER_LOGIN_SUCCESS:
			return objectAssign({}, state, {isFetching: false, info: loginSignupInfo(state.info, action), loggedIn: true, loginCheck: true});
		case IS_LOGGED_IN:
			return objectAssign({}, state, {isFetching: false, info: loginSignupInfo(state.info, action), loggedIn: action.loggedIn, checkingLogin: false, loginCheck: true});
		case USER_SIGNUP_FAIL:
		case USER_LOGIN_FAIL:
		case NOT_LOGGED_IN:
		case LOG_OUT_FAIL:
			return objectAssign({}, state, {isFetching: false, error: loginSignupError(state.error, action), checkingLogin: false, loginCheck: true});
		case LOG_OUT:
			return objectAssign({}, state, {info: loginSignupInfo(state.info, action), loggedIn: false, logOutAlert: false});
		case SEND_RECOVERY_EMAIL:
			return objectAssign({}, state, {recovery: recoverPasswordStatus(action), info: loginSignupInfo(state.info, action)});
		case RECOVERY_EMAIL_FAIL:
			return objectAssign({}, state, {recovery: recoverPasswordStatus(action), error: loginSignupError(state.error, action)});
		case RECOVERY_EMAIL_SUCCESS:
			return objectAssign({}, state, {recovery: recoverPasswordStatus(action)});
		case TOGGLE_FORGOT_PASSWORD:
			return objectAssign({}, state, {forgotPassword: !state.forgotPassword});
		case PASSWORD_RESET_REQUESTED:
		case PASSWORD_RESET_SUCCESS:
		case PASSWORD_RESET_ERROR:
			return objectAssign({}, state, {passwordReset: passwordReset( state.passwordReset, action )});
		case LOG_OUT_ALERT:
			return objectAssign({}, state, {logOutAlert: !state.logOutAlert});
		case LOG_OUT_SUCCESS:
			return objectAssign({}, loginInitialState, {loginCheck: true});
		default:
			return state;
	}
};

function loginSignupInfo ( state = loginInitialState.info, action ) {
	switch (action.type) {
		case USER_SIGNUP:
		case USER_LOGIN:
			return objectAssign({}, state, {name: action.name, email: action.email});
		case USER_SIGNUP_SUCCESS:
		case USER_LOGIN_SUCCESS:
		case IS_LOGGED_IN:
			return objectAssign({}, action.info);
		case LOG_OUT:
			return objectAssign({}, loginInitialState.info);
		case SEND_RECOVERY_EMAIL:
			return objectAssign({}, {email: action.email});
		case LOGIN_CHECK:
		default:
			return state;
	}
};

function loginSignupError ( state = loginInitialState.error, action ) {
	switch (action.type) {
		case USER_LOGIN_FAIL:
			return objectAssign({}, {show: true, message: 'Either the email or password you entered is incorrect'});
		case USER_SIGNUP_FAIL:
			return objectAssign({}, {show: true, message: action.messages});
		case LOG_OUT_FAIL:
		case RECOVERY_EMAIL_FAIL:
			return objectAssign({}, action.error);
		case NOT_LOGGED_IN:
		default:
			return state;
	}
};

function recoverPasswordStatus( action ) {
	switch (action.type) {
		case SEND_RECOVERY_EMAIL:
			return { sending: true, success: false };
		case RECOVERY_EMAIL_FAIL:
			return { sending: false, success: false };
		case RECOVERY_EMAIL_SUCCESS:
			return { sending: false, success: true };
	};
};

function passwordReset( state = loginInitialState.passwordReset, action ) {
	switch (action.type) {
		case PASSWORD_RESET_REQUESTED:
			return objectAssign({}, state, {sending: true, error: loginInitialState.passwordReset.error});
		case PASSWORD_RESET_SUCCESS:
			return objectAssign({}, state, {sending: false, success: true});
		case PASSWORD_RESET_ERROR:
			return objectAssign({}, state, {sending: false, error: {show: true, message: action.data.message}});
	}
}

export default Login;