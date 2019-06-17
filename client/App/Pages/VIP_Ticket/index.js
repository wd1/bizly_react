import React from 'react';
import styles from './index.css';
import { browserHistory } from 'react-router';
import VipPass from '../../Common/VipPass/VipPass';

const VIPTicketPage = ({reservation, showError, message, fetching, fetched, inviteId, getTicket}) => {
  if (!inviteId && !fetching) browserHistory.push('/');
  if (!fetched && !fetching) getTicket(inviteId);
  // add error instance with a click refresh
  return (
    <div className={styles.inviteouter}>
    	<div className={styles.vipinner}>
      		{showError ? <div>{message}</div> : false}
      		<VipPass reservation={reservation}/>
      	</div>
    </div>
  );
};

export default VIPTicketPage;