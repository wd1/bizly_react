import React from 'react';
import styles from './PaymentInfo.css';
import LoadingView from '../../../Common/Loading_View/LoadingView';

import { FormGroup, ControlLabel, FormControl, Row, Col } from 'react-bootstrap';

const PaymentInfo = ({
  handleSubmit,
  submit,
  submitting,
  fields: {
    cardNumber,
    expDate,
    cvc,
    name,
    zip
  },
  apiErrors,
  showError,
  getCards,
  fetchingCards,
  cardsFetched,
  cards,
  userId,
  selectedCard,
  selectCard,
  creditCard
}) => {
  if ( !fetchingCards && !cardsFetched && userId ) getCards(userId);
  return (
    <div>
      <h1>PAYMENT INFORMATION</h1>
      <div>
        <h3 className={styles.subhead}>Payment Type</h3>
        <Row className={styles.formrow}>
          <Col xs={12} sm={8}  className={styles.paymentbox}>
            <span>
              <select value={selectedCard} onChange={(event) => selectCard(event.target.value)} className={styles.styledselect}>
                {cards.map(card =>
                  <option key={card.id} value={card.id}>{card.brand || 'MISC'} **** **** **** {card.last4} (USD)</option>
                )}
                <option value="Add">Add new payment method</option>
              </select>
            </span>
          </Col>
          {cardsFetched && (selectedCard !== 'Add') ?
          <Col xs={12} sm={4} className={styles.typebox}>
            <img className={styles.cardLogo} src={creditCard.logo}/>
            <span className={styles.nameexp}>
              <strong>Name:</strong> {creditCard.name}<br />
              <strong>Expires:</strong> {creditCard.expMonth}/{creditCard.expYear}
            </span>
          </Col> : ''}
        </Row>
        {submitting ? (<LoadingView viewname="checkout" />) : ''}
        {selectedCard === 'Add' ?
        <div>
          <form autoComplete="off" onSubmit={handleSubmit(submit)}>
            <Row className={styles.formrow}>
              <div className="has-error">
                {showError && <div className="help-block">{apiErrors}</div>}
              </div>
              <Col xs={12} sm={8} >
                <fieldset className={"form-group" + (cardNumber.touched && cardNumber.error ? ' has-error' : '')}>
                  <label htmlFor="cc number" className={styles.checkoutlabel}>Credit Card</label>
                  <input type="text" name="cc number" className="form-control" id="ccnumber" placeholder="Credit Card Number" {...cardNumber}/>
                  {cardNumber.touched && cardNumber.error && <div className="help-block">{cardNumber.error}</div>}
                </fieldset>
              </Col>
              <Col xs={12} sm={4} >
                <fieldset className={"form-group" + ( expDate.touched && expDate.error ? ' has-error' : '')}>
                  <label htmlFor="exp" className={styles.checkoutlabel}>Expiration Date</label>
                  <input type="text" name="exp" className="form-control" id="exp" placeholder="MM/YY" {...expDate}/>
                  {expDate.touched && expDate.error && <div className="help-block">{expDate.error}</div>}
                </fieldset>
              </Col>
            </Row>
            <Row className={styles.formrow}>
              <Col xs={12} sm={3} >
                <fieldset className={"form-group" + (cvc.touched && cvc.error ? ' has-error' : '')}>
                  <label htmlFor="CVC" className={styles.checkoutlabel}>CVC</label>
                  <input type="text" name="CVC" className="form-control" id="CVC" placeholder="CVC" {...cvc}/>
                  {cvc.touched && cvc.error && <div className="help-block">{cvc.error}</div>}
                </fieldset>
              </Col>
              <Col xs={12} sm={6} >
                <fieldset className={"form-group" + (name.touched && name.error ? ' has-error' : '')}>
                  <label htmlFor="cardname" className={styles.checkoutlabel}>Cardholder Name</label>
                  <input type="text" name="cardname" className="form-control" id="cardname" placeholder="Cardholder Name" {...name}/>
                  {name.touched && name.error && <div className="help-block">{name.error}</div>}
                </fieldset>
              </Col>
              <Col xs={12} sm={3} >
                <fieldset className={"form-group" + (zip.touched && zip.error ? ' has-error' : '')}>
                  <label htmlFor="zip" className={styles.checkoutlabel}>Zip Code</label>
                  <input type="text" name="zip" className="form-control" id="zip" placeholder="Zip Code" {...zip}/>
                  {zip.touched && zip.error && <div className="help-block">{zip.error}</div>}
                </fieldset>
              </Col>
            </Row>
            <Row>
              <Col xs={12} >
                  <button className={styles.addcard}>Add Card</button>
              </Col>
            </Row>
          </form>
        </div> : ''}
      </div>
    </div>
  );
};

export default PaymentInfo;