import { connect } from 'react-redux';
import { resetPassword } from './actions';
import ResetPassword from './index';

const mapStateToProps = (state, ownProps) => {
  return {
    email: ownProps.location.query.email,
    token: ownProps.location.query.token,
    showError: state.Login.passwordReset.error.show,
    message: state.Login.passwordReset.error.message,
    success: state.Login.passwordReset.success
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submit: (event) => {
      event.preventDefault();
      const email = event.target[0].value;
      const token = event.target[1].value;
      const password = event.target[2].value;
      const password_confirmation = event.target[3].value;
      const requestObj = {email, token, password, password_confirmation};
      return dispatch( resetPassword(requestObj) );
    }
  };
};

const ResetPasswordContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPassword);

export default ResetPasswordContainer;