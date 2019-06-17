import React from 'react';
import { Modal } from 'react-bootstrap';
import GuestsDropdownContainer from '../Guests_Dropdown/GuestsDropdownContainer';
import BizDatePickerContainer from '../BizDatePicker/BizDatePickerContainer';
import TimeDropdownContainer from '../Time_Dropdown/TimeDropdownContainer';
import styles from './rfpModal.css';

const RfpModal = ({date, time, guests, rfp, location, hideModal, submit}) => {
  return (
    <Modal show={rfp} onHide={hideModal}>
      <Modal.Header closeButton>
        <Modal.Title className={styles.title}>Dates Further Out</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={styles.subtitle}>Bizly is booking for events 30 days or less</div>
        <div className={styles.introtext}>For events further out, we will get back to you as soon as possible. Please let us know more information about your event.</div>
        <form onSubmit={submit}>
          <div className="form-group col-sm-12 col-md-6" >
            <input type="text" tabIndex={1} autoFocus={true} className={styles.formgroupinput} placeholder="Name" />
          </div>

          <div className="form-group col-sm-12 col-md-6" >
            <input type="email" tabIndex={2} className={styles.formgroupinput} placeholder="Email address"  />
          </div>

          <div className="form-group col-sm-12 col-md-6" >
            <input type="text" tabIndex={1} autoFocus={true} className={styles.formgroupinput} placeholder="Company" />
          </div>
          <div className="form-group col-sm-12 col-md-6" >
            <input type="text" tabIndex={1} autoFocus={true} className={styles.formgroupinput} placeholder="Phone Number" />
          </div>
          <div className={styles.searchrow}>
            <input placeholder="Location" className={styles.formgroupinput + ' ' + styles.locationinput} />
            <GuestsDropdownContainer/>
            <BizDatePickerContainer isModal="true" />
            <TimeDropdownContainer/>
          </div>
          <div className={styles.buttonrow}><button>SUBMIT</button></div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default RfpModal;