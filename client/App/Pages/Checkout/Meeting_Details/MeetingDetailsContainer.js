import { reduxForm } from 'redux-form';
import { updateMeetingDetails } from './MeetingDetailsActions';
import MeetingDetails from './MeetingDetails';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitDetails: (data) => dispatch(updateMeetingDetails(data))
  };
};

const fields = ['company', 'title'];

const formConfig = {
  form: 'Meeting Details',
  fields
};

const MeetingDetailsContainer = reduxForm(
  formConfig,
  mapStateToProps,
  mapDispatchToProps
)(MeetingDetails);

export default MeetingDetailsContainer;

function validation(values) {
  const errors = {
    company: company(values.company),
    title: title(values.title)
  };
  return errors;

  function company(company) {
    if (company) {
      if (company.length > 30) return 'Please enter a company name that is 30 characters or less';
    }
    return '';
  }

  function title(title) {
    if (title) {
      if (title.length > 30) return 'Please enter a title name that is 30 characters or less';
      if (!/^[a-zA-Z0-9'-\s]*$/.test(title)) return 'Please enter alphanumeric characters only';
    }
    return '';
  }
}