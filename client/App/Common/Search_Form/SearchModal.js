import React, { PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';
import SearchFormContainer from './SearchFormContainer';
import styles from './SearchModal.css';

const SearchModal = ({ show, closeModal, isModal }) => {
  const showModal = (show === 'true');
  return (
    <Modal className={styles.modal} show={showModal} onHide={closeModal}>
      <Modal.Header className={styles.header}>
        <Modal.Title className={styles.title}>SEARCH</Modal.Title>
        <span role="close" className={styles.close} onClick={() => closeModal()}/>
      </Modal.Header>
      <Modal.Body className={styles.body}>
        <div className={styles.formContainer}>
          <SearchFormContainer isModal={true} />
        </div>
      </Modal.Body>
    </Modal>
  );
};

SearchModal.propTypes = {
  showModal: PropTypes.string,
  closeModal: PropTypes.func
};

export default SearchModal;

// <i class={ styles.guestsArrow + " fa fa-angle-down" } aria-hidden="true"></i>