import React from 'react';
import SearchContainer from '../../Common/Search_Form/SearchContainer';
import LoadingView from '../../Common/Loading_View/LoadingView';
import MobileLayoutContainer from './Mobile_Layout/container';
import DesktopLayoutContainer from './Desktop_Layout/container';
import styles from './index.css';

const Property = ({
	location,
	fetched,
	isFetching,
	slug,
	getDetails,
	isNewProperty,
	shouldCreateOrder,
	shouldEditAmenities,
	shouldEditReservation,
	createOrder,
	editReservation,
	editAmenities,
	amenities,
	orderInfo,
	editInfo,
	reservationId,
	getDetailsAttempts,
	createOrderAttempts,
	editingOrder
}) => {
	// need to handle creating another order after order creation fail
	//if ( (!fetched && !isFetching && getDetailsAttempts < 3) || isNewProperty ) {
		getDetails(slug);
	//}
	if ( getDetailsAttempts > 2 ) {
		return (
			<div className={styles.brokenwrap}>
				<div className="container">
					<div className="row">
						<div className="col-xs-12">
							<p className={styles.leadtext}>Yikes. Our bad.<br />
							Something has gone wrong.
							</p>
							<h2><i className={styles.iconrefresh}></i>Please refresh the page.</h2>
							<p className={styles.smalltext}>Still having trouble? <a href="mailto:support@bizly.com">Contact Support.</a></p>
						</div>
					</div>
				</div>
			</div>
		);
	}

	//if ( isFetching ) return (<LoadingView/>);

  if ( shouldCreateOrder && createOrderAttempts < 3 ) createOrder(orderInfo);
  if ( shouldEditReservation ) editReservation(editInfo, reservationId);
  if ( !shouldEditReservation && !editingOrder && shouldEditAmenities ) {
		editAmenities({amenities}, reservationId);
	}

	return (
		<div>
			<div className={styles.searchwrap + ' visible-xs-block'}>
				<SearchContainer/>
			</div>

			<div className="desktop-yo">
				<DesktopLayoutContainer location={location}/>
			</div>
		</div>
	);
};

export default Property;
