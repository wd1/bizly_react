import React from 'react';
import CartContainer from '../../Common/Cart/container';
import MeetingDetailsContainer from './Meeting_Details/MeetingDetailsContainer';
import PaymentInfoContainer from './Payment_Info/PaymentInfoContainer';
import SpecialRequestsContainer from './Special_Requests/SpecialRequestsContainer';
import styles from './index.css';
import { Row, Col } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';

// TODO: turn policies into its own component
// TODO: turn mapPolicies into a reusable utility
const Checkout = ({location, slug, orderId, bookOrder, order, policies, agreed, toggleTerms, readyToBook, showError, messages}) => {
	if (!orderId) browserHistory.push('/');
	return (
		<div className={styles.outerwrap}>
			<div className="container">
				<Row>
					<Col xs={12} sm={5} md={4} lg={3} className={styles.checkouttop + ' hidden-sm hidden-md hidden-lg hidden-xl'}>
						<CartContainer location={location} static={true}/>
					</Col>
					<Col xs={12} sm={7} md={8} lg={9} className={styles.checkoutleft}>

					{ showError ? showError && typeof messages === 'object' ? messages.map(message => <div className={styles.errorouter}><div className={styles.errorbox}>{message}</div></div>) : (<div className={styles.errorouter}><div className={styles.errorbox}>{messages}</div></div>) : false }

						<div>
							<div className={styles.checkoutblock}>
								<MeetingDetailsContainer/>
							</div>
							<div className={styles.checkoutblock}>
								<PaymentInfoContainer/>
							</div>
							<SpecialRequestsContainer/>
							<div className={styles.termsrow}><input type="checkbox" checked={agreed} onChange={() => toggleTerms()}/>I agree to the terms and conditions including the hotel policy, Bizly terms and conditions, privacy policy and user terms</div>
						</div>
					</Col>
					<Col xs={12} sm={5} md={4} lg={3} className={styles.checkoutright + ' hidden-xs'}>
						<CartContainer location={location} static={true}/>
					</Col>
				</Row>
				<Row>
		    		<Col xs={12}>
						<div className={styles.btnrow}>
							<span><Link to={'/property/' + slug}><button className={styles.editbutton}>EDIT BOOKING</button></Link></span>
							{ readyToBook ? (<span><button onClick={() => bookOrder(orderId, order)}>BOOK YOUR MEETING</button></span>) :
							(<button className="btn-disabled">PLEASE COMPLETE FORM</button>) }
						</div>
					</Col>
				</Row>
			</div>
			<div className={styles.checkoutbreakout}>
				<div className="container">
					<Row>
		    		<Col xs={12}>
							<div className={styles.checkoutblock}>
								<div>
									<table>
										<tbody>
											<tr>
												<th>The Fine Print</th>
												<td>
													<div className={styles.policycell}>{mapPolicies(policies)}</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</Col>
					</Row>
					<Row>
						<Col xs={12}>

						</Col>
					</Row>
				</div>
			</div>
		</div>
	);
};

export default Checkout;

function mapPolicies( policies, styles) {
  return policies.map( policy => {
    return (
      <div key={policy.id}>
        {policy.attributes.copy}
      </div>
    )
  });
};