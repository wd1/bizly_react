import React from 'react';
import styles from './PromoCodeForm.css'; 

const PromoCodeForm = ({orderId, submit, showError, error, promoCodeAccepted}) => {
  return (
    <div>
      { !promoCodeAccepted ?
      <div className={styles.promowrap}>
        <form autoComplete="off" onSubmit={submit}>
          {showError ? <div className={styles.errorouter}>{error}</div> : false}
          <input type="text" name="promo" placeholder="Enter Promo Code"/>
          <input type="hidden" name="id" defaultValue={orderId}/>
          <button>APPLY</button>
        </form>
      </div> : false }
    </div>
  );
};

export default PromoCodeForm;