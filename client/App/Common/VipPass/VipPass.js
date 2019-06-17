import React from 'react';
import styles from './VipPass.css';

const VipPass = ({reservation}) => {
  const {
    propertyName,
    propertyLogo,
    address,
    wifi,
    roomName,
    date,
    startTime,
    endTime,
    hostName,
    hostEmail,
    hostPhone,
    guests
  } = reservation;

  return (
    <div className={styles.modalouter}>
      <div className={styles.modalinner}>

        { propertyLogo ?
          <div className={styles.propertylogo}><img src={propertyLogo} /></div> :
          <h1 className={styles.hotelname}>{propertyName}</h1>
        }

        <div className={styles.vipsummary}>
          <span className={styles.vipleft}>VIP</span>
          <span className={styles.vipright}>
            <span>{roomName}</span><br />
            <span>{date}</span><br />
            <span>{startTime} - {endTime}</span><br />
          </span>
        </div>
        <div>
          <div className={styles.detailline}>
            <span className={styles.detailtag}>ADDRESS</span>
            <span className={styles.detailinfo}>{address}</span>
          </div>
          <div className={styles.detailline}>
            <span className={styles.detailtag}>Wi-Fi</span>
            <span className={styles.detailinfo}>{wifi}</span>
          </div>
          <div className={styles.detailline}>
            <span className={styles.detailtag}>HOST NAME</span>
            <span className={styles.detailinfo}>{hostName}</span>
          </div>
          { hostPhone ?
            <div className={styles.detailline}>
              <span className={styles.detailtag}>HOST PHONE</span>
              <span className={styles.detailinfo}>{hostPhone}</span>
            </div> :
            <div className={styles.detailline}>
              <span className={styles.detailtag}>HOST EMAIL</span>
              <span className={styles.detailinfo}>{hostEmail}</span>
            </div>
          }
          <div className={styles.detailline}>
            <span className={styles.detailtag}>NUMBER OF ATTENDEES</span>
            <span className={styles.detailinfo}>{guests}</span>
          </div>
        </div>
        <button className={styles.invitebutton}>INVITE GUESTS</button>
      </div>
    </div>
  );
};

export default VipPass;