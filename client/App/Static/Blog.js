import React from 'react';
import StaticPagesHeader from './StaticPagesHeader';
import styles from './Blog.css';

import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

var blogimg = {
  backgroundImage: 'url(https://res.cloudinary.com/hdd626jg7/image/upload/v1468261073/home-hero-2x_umwdfh.jpg)'
};

const About = () => {
	const location = window.location;
	return location.replace('https://blog.bizly.com');
  // return (
  //   <div className={styles.staticwrap}>
	//       <StaticPagesHeader active="blog" />
  //    	<div className={styles.herowrap}>
	// 			<div className={styles.heroposition}>
	// 				<div className="container">
	// 			    	<div className="row">
	// 			    		<div className={styles.heroinner + ' col-sm-10 col-sm-offset-1'}>
	// 			      			<h1 className={styles.heading}>Bizly Blog</h1>
	// 			      			<h2 className={styles.subheading}>Getting Bizly in the real world</h2>
	// 			      		</div>
	// 			      </div>
	// 			    	<div className="row">
	// 			    		<div className={styles.mailformouter + ' col-xs-12 col-sm-6 col-xs-offset-1 '}>
	// 			      			<form className={styles.emailform}>
	// 			      				<input type="text" className={styles.emailfield} placeholder="Email address to sign up for our newsletter" />
	// 			      				<button className={styles.signup}>Sign up</button>
	// 			      			</form>
	// 			      		</div>
	// 			      </div>
	// 			    </div>
	// 		    </div>
	// 	</div>
	//     <div className={styles.blogwrap + " container"}>
	//     	<Row>
	//     		<Col xs={12} sm={6} md={4} className={styles.outerblog}>
	//     			<div className={styles.blogbox}  style={blogimg}>
	//     				<div className={styles.background}>
	// 	    				<div className={styles.bloginner}>
	// 	    					<a href="">Title Goes Here</a>
	// 	    				</div>
	//     				</div>
	//     			</div>
	// 	      	</Col>
	//     		<Col xs={12} sm={6} md={4} className={styles.outerblog}>
	//     			<div className={styles.blogbox}  style={blogimg}>
	//     				<div className={styles.background}>
	// 	    				<div className={styles.bloginner}>
	// 	    					<a href="">Title Goes Here</a>
	// 	    				</div>
	//     				</div>
	//     			</div>
	// 	      	</Col>
	//     		<Col xs={12} sm={6} md={4} className={styles.outerblog}>
	//     			<div className={styles.blogbox}  style={blogimg}>
	//     				<div className={styles.background}>
	// 	    				<div className={styles.bloginner}>
	// 	    					<a href="">Title Goes Here</a>
	// 	    				</div>
	//     				</div>
	//     			</div>
	// 	      	</Col>
	//     		<Col xs={12} sm={6} md={4} className={styles.outerblog}>
	//     			<div className={styles.blogbox}  style={blogimg}>
	//     				<div className={styles.background}>
	// 	    				<div className={styles.bloginner}>
	// 	    					<a href="">Title Goes Here</a>
	// 	    				</div>
	//     				</div>
	//     			</div>
	// 	      	</Col>
	//     		<Col xs={12} sm={6} md={4} className={styles.outerblog}>
	//     			<div className={styles.blogbox}  style={blogimg}>
	//     				<div className={styles.background}>
	// 	    				<div className={styles.bloginner}>
	// 	    					<a href="">Title Goes Here</a>
	// 	    				</div>
	//     				</div>
	//     			</div>
	// 	      	</Col>
	//     		<Col xs={12} sm={6} md={4} className={styles.outerblog}>
	//     			<div className={styles.blogbox}  style={blogimg}>
	//     				<div className={styles.background}>
	// 	    				<div className={styles.bloginner}>
	// 	    					<a href="">Title Goes Here</a>
	// 	    				</div>
	//     				</div>
	//     			</div>
	// 	      	</Col>
	// 	      </Row>
  //     	</div>
  //   </div>
  // );
};

export default About;