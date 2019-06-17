import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import PromoCodeFormContainer from './Promo_Code/PromoCodeFormContainer';
import CartAddOn from './CartAddOn';
import ErrorBox from '../Error_Box/ErrorBox';
import LoadingView from '../Loading_View/LoadingView';
import styles from './Cart.css';

import starSrc from '../../../assets/icon-star.png';
import calSrc from '../../../assets/icon-calendar.png';
import guestSrc from '../../../assets/icon-guest.png';
import roomSrc from '../../../assets/icon-room.png';
import foodSrc from '../../../assets/icon-food.png';
import clockSrc from '../../../assets/icon-clockpurple.png';
import promoSrc from '../../../assets/icon-discount.png';


// use isStatic to determine when the cart is on the checkout or confirmation pages
//      or any page where its position doesn't have to be fixed
const Cart = ({
  isStatic,
  isAbsolute,
  removeAddOn,
  propertyName,
  date,
  time,
  guests,
  loggedIn,
  duration,
  roomName,
  removeRoom,
  addOns,
  roomRate,
  total,
  orderCreated,
  roomImg,
  room,
  roomId,
  promo,
  showError,
  messages,
  rate,
  editingReservation,
  selectedRoom,
  openLogin,
  orderId,
  removePromoCode,
  removingCode
}) => {

  const CheckoutLink = () => {
    if (orderCreated && !showError && roomId > 0) {
      return (
        <Link to="/checkout">
          <button>Book this Meeting Experience</button>
        </Link>
      );
    } else if (selectedRoom.id !== 0 && !loggedIn) {
      return (<button onClick={openLogin}>Login to Book</button>);
    } else {
      return(<div></div>);
    }
  };

  if (typeof window === 'object' && window.innerWidth > 768) {
    var maxheight = window.innerHeight - 410;
    if(showError){
      var maxheight = window.innerHeight - 500;
    }
  } else {
    var maxheight = "100%";
  }

  var outerStyle = {
    maxHeight: maxheight
  };

  var cartStyles = classnames(
    styles.cartouter,
    styles.expand,
    {
      [styles.static]: isStatic,
      [styles.absolute]: isAbsolute
    }
  );


  return (
    <div className={cartStyles}>
      <div className={styles.cartheader}>
        Cart
      </div>
      {isStatic ? <div className={styles.roomimgwrap}><img src={roomImg} className={styles.roomimg} style={{height: '195px', width: '100%'}} /></div> : ''}
      <div className={styles.mobileheader}>
        <span className={styles.rmimageleft}><img src={roomImg} className={styles.roomimg}/></span>
        <div className={styles.headtext}>
          <strong>{propertyName}</strong><br />
          {roomName && !isStatic ? <span onClick={() => removeRoom()} className={styles.removeroom}>remove</span> : ''}
          <span>{roomName || 'No Room Selected'}</span>
        </div>
      </div>
      <div className={styles.summaryinfo}>
        <div className={styles.cartinner} >
          <div className={styles.sectionborder}>
            <div className={styles.cartline}>
              <span className={styles.iconleft}><img src={starSrc} /></span>
              <span>{propertyName}</span>
            </div>
            <div className={styles.cartline}>
              <span className={styles.iconleft}><img src={calSrc} /></span>
              <span>{date.format('MMM D, YYYY')} {time ? '@ '+ time: ''}</span>
            </div>
            <div className={styles.cartline}>
              <span className={styles.iconleft}><img src={guestSrc} /></span>
              <span>{guests} Guests</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cartinner} >
        <div style={roomName ? {display: 'block'} : {display: 'none'}} className={styles.mobilesummary + ' cartsummarycontainer'}>
          <div className={styles.overflowy} style={outerStyle}>
            <div>
              <div className={styles.cartline}>
                <span className={styles.iconleft}><img src={roomSrc}/></span>
                <div className={styles.detblock}>
                  {roomName && !isStatic ? <span onClick={() => removeRoom()} className={styles.removeroom}>remove</span> : ''}
                  <span>{roomName || 'No Room Selected'}</span>
                </div>
              </div>
              <div className={styles.cartline}>
                <span className={styles.iconleft}><img src={clockSrc} /></span>
                <div className={styles.detblock}>
                  <div className={styles.dethead}>{duration + (duration > 1 ? ' hours' : ' hour')} {`($${rate} x ${duration})`}</div>
                  {room.fees && room.fees > 0 ? <div className={styles.tax}>Fees ${room.fees}</div> : '' }
                  {room.taxes ? <div className={styles.tax}>Tax ${room.taxes}</div> : ''}
                  {room.total && loggedIn ?
                    <div className={styles.dettotal}>${room.total}</div> :
                    <div className={styles.dettotal}>${duration*roomRate}</div>
                  }
                </div>
              </div>
              {addOns.map( addOn => {
                return (
                  <div key={addOn.id}>
                    <CartAddOn total={addOn.total} taxes={addOn.taxes} fees={addOn.fees} isStatic={isStatic} id={addOn.id} remove={removeAddOn} styles={styles} name={addOn.attributes.name} units={addOn.attributes.units} rate={addOn.attributes.published_rate} image={addOn.attributes.icon.src_url} guests={guests}/>
                  </div>
                )
              })}
              { promo.value > 0 && !editingReservation ?
                <div className={styles.cartline}>
                  <span className={styles.iconleft}><img src={promoSrc} /></span>
                  <div className={styles.detblock}>
                    <span className={styles.remove} onClick={() => removePromoCode(orderId)}>x</span>
                    <div className={styles.dethead}>{promo.code}</div>
                    <div className={styles.dettotal}>-{ promo.type === 'flat' ? `$${promo.value}` : `${promo.value}%` }</div>
                  </div>
                </div> : ''
              }
              { removingCode ? <div className={styles.cartline}><LoadingView viewname="checkout"/></div> : false }
            </div>
          </div>
        </div>
        <div className={styles.promoouter}>
          { isStatic ? <PromoCodeFormContainer/> : ''}
        </div>
        <div>
          { total > 0 && roomId > 0 ? <span className={styles.total}>{orderCreated ? 'TOTAL' : 'SUBTOTAL'}: ${total}</span> : false }
        </div>
        {isStatic ? '' :
        <div className={styles.bookbutton}>
          <CheckoutLink/>
        </div>
        }
      </div>
      { showError && roomId > 0 ? <ErrorBox messages={messages}/> : false}
    </div>
  );
};

export default Cart;
