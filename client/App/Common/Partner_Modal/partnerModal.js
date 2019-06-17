import React from 'react';
import { Modal } from 'react-bootstrap';
import GuestsDropdownContainer from '../Guests_Dropdown/GuestsDropdownContainer';
import BizDatePickerContainer from '../BizDatePicker/BizDatePickerContainer';
import TimeDropdownContainer from '../Time_Dropdown/TimeDropdownContainer';
import styles from './partnerModal.css';

const RfpModal = ({date, time, guests, rfp, hideModal, submit, handleSubmit}) => {
  return (
    <Modal show={rfp} onHide={hideModal}>
      <Modal.Header closeButton>
        <Modal.Title className={styles.title}>Affiliates</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={styles.subtitle}>Tell us a bit more about your company</div>
        <form onSubmit={handleSubmit(submit)}>
          <div className="form-group col-sm-12 col-md-6" >
            <input type="text" tabIndex={1} autoFocus={true} className={styles.formgroupinput} placeholder="Name" /> 
          </div>
          <div className="form-group col-sm-12 col-md-6" >
            <input type="text" tabIndex={1} autoFocus={true} className={styles.formgroupinput} placeholder="Company Name" /> 
          </div>

          <div className="form-group col-sm-12 col-md-6" >
            <input type="email" tabIndex={2} className={styles.formgroupinput} placeholder="Email address"  /> 
          </div>
          <div className="form-group col-sm-12 col-md-6" >
            <input type="text" tabIndex={1} autoFocus={true} className={styles.formgroupinput} placeholder="Address" /> 
          </div> 
          <div className="form-group col-sm-12 col-md-6" >
            <input type="text" tabIndex={1} autoFocus={true} className={styles.formgroupinput} placeholder="Phone Number" /> 
          </div> 
          <div className="form-group col-sm-12 col-md-6" >
            <input type="text" tabIndex={1} autoFocus={true} className={styles.formgroupinput} placeholder="Monthly Active Users" /> 
          </div>
          <div className="form-group col-sm-12 col-md-6" >
            <input type="text" tabIndex={1} autoFocus={true} className={styles.formgroupinput} placeholder="Position / Title" /> 
          </div>
          <div className="form-group col-sm-12 col-md-6" >
            <input type="text" tabIndex={1} autoFocus={true} className={styles.formgroupinput} placeholder="Industry" /> 
          </div> 
          <div className={styles.buttonrow}><button>SUBMIT</button></div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default RfpModal;