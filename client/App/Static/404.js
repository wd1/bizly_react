import React from 'react';
import StaticPagesHeader from './StaticPagesHeader';
import styles from './404.css';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import FeatPropertiesContainer from '../Pages/Home/Featured_Properties/FeatPropertiesContainer';

const NotFound = () => {
  return (
    <div className={styles.staticwrap}>
     	<div className={styles.herowrap}>
				<div className={styles.background}>
				</div>
				<div className={styles.heroposition}>
					<div className="container">
				    	<Row>
				    		<Col xs={12} className={styles.heroinner}>
				      			<h1 className={styles.heading}>Aw Biz-arre!</h1> 
				      			<h2 className={styles.subheading}>This isn't the page you're looking for.</h2>
				      			<p className={styles.pagetext}>Error code: 404<br />
				      			Head back to the <a href="/">homepage</a> or check out one of these links instead:
				      			</p>
				      			<p className={styles.pagetext}>
				      				<a href="/" >Home</a><br />
				      				<a href="/support" >Support</a><br />
				      				<a href="http://blog.bizly.com" target="_blank">Blog</a><br />
				      				<a href="/partners" >Hotel Partners</a><br />
				      			</p>
				      		</Col>
				      </Row>
				    </div>
			    </div>
		</div>
		    <div className={styles.staticinner}>
			    <div  className={styles.missing}>
			    <div  className={styles.rooms}>
			    	<Row>
			    		<Col xs={12} >
			      			<h3 className={styles.bookhead}>Book a Room</h3>
			      		</Col>
			      </Row>
					<div>
						<FeatPropertiesContainer notFound={true}/>
					</div>
				</div>
			</div>
				</div>
    </div>
  );
};

export default NotFound;