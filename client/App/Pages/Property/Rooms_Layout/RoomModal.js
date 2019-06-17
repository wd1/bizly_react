import React, { PropTypes } from 'react';
import RoomListingContainer from './RoomListingContainer';
import AddOnBox from './AddOnBox';
import ErrorBox from '../../../Common/Error_Box/ErrorBox';
import SearchDropdown from './SearchDropdown';
import { Link } from 'react-router';
import { Modal } from 'react-bootstrap';
import styles from './RoomModal.css';

const RoomModal = ({show, room, close, total, loggedIn, showError, orderCreated, openLogin, notSameRoom, messages, operationTimes}) => {
  if ( room.attributes ) {
    return (
      <Modal show={show} onHide={close} className={styles.RoomModal}>
        <Modal.Header closeButton className="invert">
          <Modal.Title className={styles.modaltitle}>CHOOSE OPTIONS</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalbody}>
          <RoomListingContainer hideListingButton={true} room={room} mobile={true}/>
          <div className={styles.descriptionouter}>
            <div className="descriptionlist">
              <div dangerouslySetInnerHTML={{__html: room.attributes.description}}/>
            </div>
          </div>
          <div>
            <div>MEETING DETAILS
              <SearchDropdown operationTimes={room.attributes.operation_times} />
              { showError && !notSameRoom ? <ErrorBox messages={messages}/> : false}
            </div>
          </div>
          <div>
            <AddOnBox amenities={room.amenities} mobile={true}/>
          </div>
          { loggedIn ?
            (orderCreated && !showError ?
              (<Link to="/checkout">
                <button>${total} | BOOK IT</button>
              </Link>) : false) :
            (<button onClick={() => openLogin()}>LOGIN TO BOOK ROOM</button>)
          }
        </Modal.Body>
      </Modal>
    )
  }

  return (<div></div>);
};

export default RoomModal;