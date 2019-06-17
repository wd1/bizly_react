import { reduxForm } from 'redux-form';
import ForgotPasswordForm from './ForgotPassword';
import { email } from './validation';
import { sendRecoveryEmail, forgotPasswordToggle, closeModal } from '../actions';

const mapStateToProps = (state) => {
  return {
    recoverySuccess: state.Login.recovery.success
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitRecovery: (data) => dispatch( sendRecoveryEmail(data) ),
    toggleForgotForm: () => dispatch( forgotPasswordToggle() ),
    closeModalClick: () => dispatch( closeModal() )
  };
};

const fields = ['email'];

const formConfig = {
  form: "forgotPassword",
  fields,
  validate
};

const ForgotPasswordContainer = reduxForm(
	formConfig,
	mapStateToProps,
	mapDispatchToProps
)(ForgotPasswordForm);

export default ForgotPasswordContainer;

function validate(values) {
  return {email: email(values.email)};
};