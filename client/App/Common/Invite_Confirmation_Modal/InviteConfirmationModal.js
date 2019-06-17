import React from 'react';
import styles from './InviteConfirmationModal.css';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router';

const InviteConfirmationModal = ({show, close, message}) => {
  return (
    <Modal show={show}>
      <Modal.Header style={{backgroundColor: '#EFEFEF'}}>
        <div className={styles.modalheader}>
          {message}
          <span onClick={close} className={styles.closeicon}>X</span>
        </div>
      </Modal.Header>
      <Modal.Body className={styles.modalbody}>
        <div className={styles.leadtext}>
          <div className={styles.airplane}>Airplane icon</div>
          <h1>WISHING YOU THE <strong>BEST MEETING EVER</strong></h1>
        </div>
        <div className={styles.modaltext}>
          If you have any questions, please contact us at support@bizly.com. Please check your email for invoice and confirmation.
          Your VIP boarding pass, RSVPs and meeting details can be found in the Reservations page.
        </div>
        <div className={styles.buttonwrap}>
          <Link to="/">
            <button className={styles.bookbutton}>BOOK ANOTHER</button>
          </Link>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default InviteConfirmationModal;