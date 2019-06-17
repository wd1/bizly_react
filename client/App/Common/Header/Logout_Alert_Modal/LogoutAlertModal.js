import React from 'react';
import { Modal } from 'react-bootstrap';
import styles from './LogoutAlertModal.css';

const LogoutAlertModal = ({logOut, show, hide}) => {
  return (
    <Modal show={show} onHide={hide}>
      <Modal.Header closeButton>
        <Modal.Title>LOGOUT</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          Are you sure you want to log out?
          <button onClick={() => logOut(false, true)}>LOG OUT</button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LogoutAlertModal;