import React, { Component } from 'react';
import VipPass from '../VipPass/VipPass';
import InviteGuestsContainer from '../Invite_Guests/InviteGuestsContainer';
import ModifyBooking from '../ModifyBooking/ModifyBooking';

import styles from './ReservationListing.css';

// toggleVip may need an API call to retrieve details if they're not yet available
class ReservationListing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: null
    };

    this.content = {
      vip: <VipPass reservation={this.props.reservation} />,
      guests: (<div className="row">
                <div className={styles.invitewrap + " col-xs-12"}>
                    <InviteGuestsContainer {...this.props} />
                </div>
              </div>),
      booking: <ModifyBooking />
    }
  }

  toggleContent = (content) => {
    return () => {
      this.setState(function(previousState) {
        if (previousState.content === content) {
          return {
            content: null
          };
        }

        return {
          content: content
        }
      });
    };
  }

  render() {
    const {
      guests,
      wifi,
      propertyName,
      propertyLogo,
      address,
      roomName,
      roomImg,
      date,
      startTime,
      endTime,
      hostName,
      hostEmail,
      hostPhone
    } = this.props.reservation;

    const content = this.content[this.state.content];

    return (
      <div className={styles.reservationOuter}>
        <div className="row">
          <div className="col-xs-12">
            <div className={styles.reservationItem}>
              <div className={styles.imgwrap + ' col-xs-12 col-sm-5 '}>
                <div className={styles.hotelimg} style={{backgroundImage: `url(${roomImg})`}}></div>
                </div>
              <div className={styles.details + ' col-xs-12 col-sm-7'}>
                <div className={styles.name}>{propertyName}</div>
                <div className={styles.address}>{address}</div>
                <div className={styles.iconrow + ' row'}>
                  <div className="col-xs-6 col-sm-3">
                    <div className={styles.iconwrap}>
                      <div className={styles.icon}><div className={styles.icondate}></div><span className={styles.icontext}>{date}</span></div>
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-4">
                    <div className={styles.iconwrap}>
                      <div className={styles.icon}><div className={styles.icontime}></div><span className={styles.icontext}>{startTime} - {endTime}</span></div>
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-3">
                    <div className={styles.iconwrap}>
                      <div className={styles.icon}><div className={styles.iconboardroom}></div><span className={styles.icontext}>{roomName}</span></div>
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-2">
                    <div className={styles.iconwrap}>
                      <div className={styles.icon}><div className={styles.iconguests}></div><span className={styles.icontext}>{guests} guests</span></div>
                    </div>
                  </div>
                </div>
                  <div className={styles.buttonrow}>
                    <div className="col-xs-12 col-sm-4">
                      <span onClick={this.toggleContent('guests')} className={styles.button}>Invite Guests</span>
                    </div>
                    <div className="col-xs-12 col-sm-4">
                      <span onClick={this.toggleContent('vip')} className={styles.button}>View VIP Access Pass</span>
                    </div>
                    <div className="col-xs-12 col-sm-4">
                      <span onClick={this.toggleContent('booking')} className={styles.button}>Modify Booking</span>
                    </div>
                  </div>
              </div>
            </div>
            <div className={styles.content}>
              {content}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReservationListing;