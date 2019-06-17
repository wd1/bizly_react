import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import LocationDropdown from '../Location_Dropdown/index';
import GuestsDropdownContainer from '../Guests_Dropdown/GuestsDropdownContainer';
import BizDatePickerContainer from '../BizDatePicker/BizDatePickerContainer';
import TimeDropdownContainer from '../Time_Dropdown/TimeDropdownContainer';
import DurationDropdownContainer from '../Duration_Dropdown/DurationDropdownContainer';
import { closeRequestModal } from './actions';
import styles from './index.css';

const ReqModal = ({ reqModalType, search: { location, date, time, duration, guests }, hideModal, submit }) => {
  console.log('reqModalType', reqModalType);
  return (
    <Modal show={reqModalType} onHide={hideModal}>
      <Modal.Header closeButton>
        <Modal.Title className={styles.title}>MEETING REQUEST</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={styles.introText}>
          Bizly currently covers meetings for groups of 40 or less.
          To make a request for a larger party, please fill out the form below.
          We will reach out with potential spaces.
        </div>

        <form onSubmit={submit}>
          <div className="form-group col-sm-12 col-md-6" >
            <label htmlFor="name">Name</label>
            <input type="text" tabIndex={1} autoFocus={true} className={styles.formGroupInput} />
          </div>

          <div className="form-group col-sm-12 col-md-6" >
            <label htmlFor="email">Email</label>
            <input type="email" tabIndex={2} className={styles.formGroupInput} placeholder="Email address"  />
          </div>

          <div className={styles.searchRow}>
            <label htmlFor="location">Location</label>
            <LocationDropdown className={styles.formGroupInput} styles={styles} selectLocation={(location, hp) => console.log(`this works ${location} ${hp}`)} isHomepage={true} location={location}/>
            <label htmlFor="time">Meeting Time</label>
            <BizDatePickerContainer isModal="true" />
            <TimeDropdownContainer/>
          </div>

          <div className={styles.searchRow}>
            <label htmlFor="guests">Number of Guests</label>
            <input placeholder="number of guests" className={styles.formGroupInput} />
            <label htmlFor="duration">Meeting Length</label>
            <DurationDropdownContainer/>
          </div>

          <div className="form-group col-sm-12 col-md-6" >
            <label htmlFor="specialRequests">Any Special Requests?</label>
            <input type="text" name="specialRequests" tabIndex={1} autoFocus={true} className={styles.formGroupInput} />
          </div>
          <div className={styles.buttonRow}><button>SUBMIT</button></div>
        </form>

      </Modal.Body>
    </Modal>
  );
};

const mapStateToProps = ( state ) => {
  return {
    reqModalType: state.Search.reqModal === 'guests',
    search: state.Search.search
  };
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    submit: (event) => {
      event.preventDefault();
      console.log('submission hit');
    },
    hideModal: () => dispatch( closeRequestModal() )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReqModal);