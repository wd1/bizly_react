import React, { PropTypes } from 'react';

// hide remove if in checkout
const CartAddOn = ({isStatic, styles, id, image, duration, name, guests, units, rate, remove, total, taxes, fees}) => {
  const perPerson = units.toLowerCase() === 'person';

  return (
    <div className={styles.cartline}>
      <span className={styles.iconleft}><img src={image} /></span>
      <div className={styles.detblock}>
        {isStatic ? '' : (<span className={styles.remove} onClick={() => remove(id)}>x</span>)}
        <div className={styles.dethead}>{name} {perPerson ? `($${rate} x ${guests})` : ''}</div>
        {fees ? <div className={styles.tax}>Fees: ${fees}</div> : ''}
        {taxes ? <div className={styles.tax}>Tax: ${taxes}</div> : ''}
        {total ?
          <div className={styles.dettotal}>${total}</div> :
          <div className={styles.dettotal}>${perPerson ? rate*guests : rate}</div>
        }
      </div>
    </div>
  );
};

export default CartAddOn;