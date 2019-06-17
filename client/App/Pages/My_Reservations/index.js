import React from 'react';
import styles from './index.css';
import LoadingView from '../../Common/Loading_View/LoadingView';
import ReservationListingContainer from '../../Common/Reservation_Listing/ReservationListingContainer';
import { Link, browserHistory } from 'react-router';

const MyReservations = ({getReservations, userId, fetching, fetched, attempts, reservations, loggedIn, checkingLogin, loginCheck}) => {
	if ( userId && !fetched && !fetching && attempts < 3 ) getReservations(userId); // Need an error page for failures
	if ( attempts > 2 ) return (<div>Something has gone wrong on our end. Please refresh the page</div>);
	if ( fetching || checkingLogin ) return (<LoadingView/>);
	if ( !loggedIn && loginCheck ) browserHistory.push('/');

  return (
    <div className="outerwrap">
    	<div className="container">
    		<div className="row">
    			<div className="col-sm-12">
						{ reservations.length > 0 ?
    				<div className={styles.reservationsouter}>
							{reservations.map(mapRezzies)}
      			</div> :
            <div className={styles.noreservations}>
						<h1>You currently do not have any upcoming reservations</h1>
            </div>
						}
      		</div>
      	</div>
      </div>
    </div>
  );
};

export default MyReservations;

function mapRezzies( reservation ) {
	return (
		<ReservationListingContainer key={reservation.id} reservation={reservation}/>
	);
};