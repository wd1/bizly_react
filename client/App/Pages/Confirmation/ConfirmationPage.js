import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import CartContainer from '../../Common/Cart/container';
import LoadingView from '../../Common/Loading_View/LoadingView';
import ReservationListingContainer from '../../Common/Reservation_Listing/ReservationListingContainer';
import InviteGuestsContainer from '../../Common/Invite_Guests/InviteGuestsContainer';
import styles from './ConfirmationPage.css';
import { Row, Col } from 'react-bootstrap';
import { browserHistory } from 'react-router';

import starSrc from '../../../assets/icon-star.png';
import calSrc from '../../../assets/icon-calendar.png';
import guestSrc from '../../../assets/icon-guest.png';
import roomSrc from '../../../assets/icon-room.png';
import foodSrc from '../../../assets/icon-food.png';
import clockSrc from '../../../assets/icon-clockpurple.png';
import promoSrc from '../../../assets/icon-discount.png';

const ConfirmationPage = ({confirmationId, propertyName, processingOrder, confirmationView, reservation, showError}) => {
  if (processingOrder) return (<LoadingView loadingText={"Your order is being processed..."}/>);
  if (showError) browserHistory.push('/checkout');
  if (!confirmationId) browserHistory.push('/');
  return (
    <div className="outerwrap">
      <div className="container">
        <Row>
          <Col xs={12} >
            <Jumbotron className={styles.confirmationjumbo}>
              <h1 className={styles.jumbolead}>Meeting Confirmed!</h1>
              <p className={styles.jumbop}>Your amazing meeting at {propertyName} is all set.</p>
              <p className={styles.jumbop}>Check your email for your invoice and further details. Feel free to contact us at any time at support@bizly.com</p>
              <div className={styles.confirmationbox}>Confirmation Number <strong>{confirmationId}</strong></div>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <ReservationListingContainer reservation={reservation}/>
        </Row>
      </div>
    </div>
  );
};

export default ConfirmationPage;