import { reduxForm } from 'redux-form';
import { updateSpecialRequests } from './SpecialRequestsActions';
import SpecialRequests from './SpecialRequests';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitRequests: (data) => dispatch(updateSpecialRequests(data))
  };
};

const fields = ['allergies', 'roomSetup', 'avNeeds', 'event', 'other'];

const formConfig = {
  form: 'Special Requests',
  fields,
  validation
};

const SpecialRequestsContainer = reduxForm(
  formConfig,
  mapStateToProps,
  mapDispatchToProps
)(SpecialRequests);

export default SpecialRequestsContainer;

function validation(values) {
  const errors = {
    allergies: lengthCheck(values.allergies),
    roomSetup: lengthCheck(values.roomSetup),
    avNeeds: lengthCheck(values.avNeeds),
    event: lengthCheck(values.event),
    other: lengthCheck(values.other)
  };
  return errors;

  function lengthCheck(text) {
    if (text) {
      if (text.length > 200) return 'Please use 200 characters or less';
    }
    return '';
  }
}