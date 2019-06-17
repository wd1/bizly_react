import React from 'react';
import { Modal } from 'react-bootstrap';
import styles from './NotifyModal.css';

const NotifyModal = ({show, toggleModal}) => {
  return (
    <Modal show={show} onHide={toggleModal}>
      <Modal.Header closeButton className={styles.header}>
        <Modal.Title>NOTIFY ME</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={styles.centerText}>
        <h1 className={styles.welcome}>Tell us more about yourself.</h1>
        <form>
          <div className="form-group col-sm-12 col-md-6" >
            <input type="text" placeholder="Name" className={styles.formgroupinput} />
          </div>
          <div className="form-group col-sm-12 col-md-6" >
            <input type="text" placeholder="Company" className={styles.formgroupinput}/> 
          </div> 
          <div className="form-group col-sm-12 col-md-6" >
            <input type="email"  className={styles.formgroupinput} placeholder="Email address" /> 
          </div>
          <div className="form-group col-sm-12 col-md-6" >
            <input type="text" placeholder="City" className={styles.formgroupinput} />
          </div> 
          <div className={styles.buttonwrap}>
            <button>SUBMIT</button>
          </div>
        </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default NotifyModal;