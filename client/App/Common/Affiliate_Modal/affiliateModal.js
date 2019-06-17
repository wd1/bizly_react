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
        <Modal.Title className={styles.title}>Hotel Partner</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={styles.subtitle}>Please provide your information below</div>
        <form onSubmit={handleSubmit(submit)}>
          <div className="form-group col-sm-12 col-md-6" >
            <input type="text" tabIndex={1} autoFocus={true} className={styles.formgroupinput} placeholder="Name" /> 
          </div>
          <div className="form-group col-sm-12 col-md-6" >
            <input type="text" tabIndex={1} autoFocus={true} className={styles.formgroupinput} placeholder="Hotel Name" /> 
          </div>

          <div className="form-group col-sm-12 col-md-6" >
            <input type="email" tabIndex={2} className={styles.formgroupinput} placeholder="Email address"  /> 
          </div>
          <div className="form-group col-sm-12 col-md-6" >
            <input type="text" tabIndex={1} autoFocus={true} className={styles.formgroupinput} placeholder="City" /> 
          </div> 
          <div className="form-group col-sm-12 col-md-6" >
            <input type="text" tabIndex={1} autoFocus={true} className={styles.formgroupinput} placeholder="Phone Number" /> 
          </div> 
          <div className="form-group col-sm-12 col-md-6" >
            <input type="text" tabIndex={1} autoFocus={true} className={styles.formgroupinput} placeholder="# of Meeting Rooms" /> 
          </div>
          <div className="form-group col-sm-12 col-md-6" >
            <input type="text" tabIndex={1} autoFocus={true} className={styles.formgroupinput} placeholder="Position / Title" /> 
          </div>
          <div className="form-group col-sm-12 col-md-6" >
            <input type="text" tabIndex={1} autoFocus={true} className={styles.formgroupinput} placeholder="Meeting Capacity Range" /> 
          </div> 
          <div className={styles.buttonrow}><button>SUBMIT</button></div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default RfpModal;