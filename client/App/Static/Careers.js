import React from 'react';
import StaticPagesHeader from './StaticPagesHeader';
import styles from './Careers.css';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

const Careers = () => {
	const location = window.location;
	return location.replace('https://angel.co/bizly/jobs');
  // return (
  //   <div className={styles.staticwrap}>
  //     <StaticPagesHeader active="careers" />

	//     <div className={styles.staticinner}>
	//     	<Row>
	//     		<Col xs={12} className={styles.abouthead}>
	//       			<h1>Careers at Bizly</h1>
	//       			<p>Our mission is to empower the hospitality industry and the modern mobile professional. To make this movement happen, we need to enlist the brightest minds. We work hard together, we love new ideas and we care deeply about each other. Thats just us.</p>
	//       			<hr className={styles.divider}/>
	//       			<h1>Open Positions</h1>
	//       			<div className={styles.careerblock}>
	//       				<div className={styles.careerIcon + ' ' + styles.iconEngineer}>
	//       				</div>
	//       				<div className={styles.careerdivider}>
	// 	      				<div className={styles.careercategory}>
	// 	      					<p>Engineers</p>
	// 	      				</div>
	// 		      			<ul className={styles.joblists}>
	// 		      				<li><a href="">Position Title</a> - New York</li>
	// 		      				<li><a href="">Position Title</a> - New York</li>
	// 		      				<li><a href="">Position Title</a> - New York</li>
	// 		      			</ul>
	// 	      			</div>
	//       			</div>
	//       			<div className={styles.careerblock}>
	//       				<div className={styles.careerIcon + ' ' + styles.iconDesigner}>
	//       				</div>
	//       				<div className={styles.careerdivider}>
	// 	      				<div className={styles.careercategory}>
	// 	      					<p>Designers</p>
	// 	      				</div>
	// 		      			<ul className={styles.joblists}>
	// 		      				<li><a href="">Position Title</a> - New York</li>
	// 		      				<li><a href="">Position Title</a> - New York</li>
	// 		      				<li><a href="">Position Title</a> - New York</li>
	// 		      			</ul>
	// 	      			</div>
	//       			</div>
	//       			<div className={styles.careerblock}>
	//       				<div className={styles.careerIcon + ' ' + styles.iconOperations}>
	//       				</div>
	//       				<div className={styles.careerdivider}>
	// 	      				<div className={styles.careercategory}>
	// 	      					<p>Operations</p>
	// 	      				</div>
	// 		      			<ul className={styles.joblists}>
	// 		      				<li><a href="">Position Title</a> - New York</li>
	// 		      				<li><a href="">Position Title</a> - New York</li>
	// 		      				<li><a href="">Position Title</a> - New York</li>
	// 		      			</ul>
	// 	      			</div>
	//       			</div>
	//       			<div className={styles.careerblock}>
	//       				<div className={styles.careerIcon + ' ' + styles.iconSales}>
	//       				</div>
	//       				<div className={styles.careerdivider}>
	// 	      				<div className={styles.careercategory}>
	// 	      					<p>Sales</p>
	// 	      				</div>
	// 		      			<ul className={styles.joblists}>
	// 		      				<li><a href="">Position Title</a> - New York</li>
	// 		      				<li><a href="">Position Title</a> - New York</li>
	// 		      				<li><a href="">Position Title</a> - New York</li>
	// 		      			</ul>
	// 	      			</div>
	//       			</div>
	//       			<div className={styles.careerblock}>
	//       				<div className={styles.careerIcon + ' ' + styles.iconMarketing}>
	//       				</div>
	//       				<div className={styles.careerdivider}>
	// 	      				<div className={styles.careercategory}>
	// 	      					<p>Marketing</p>
	// 	      				</div>
	// 		      			<ul className={styles.joblists}>
	// 		      				<li><a href="">Position Title</a> - New York</li>
	// 		      				<li><a href="">Position Title</a> - New York</li>
	// 		      				<li><a href="">Position Title</a> - New York</li>
	// 		      			</ul>
	// 	      			</div>
	//       			</div>
	//       			<div className={styles.careerblock}>
	//       				<div className={styles.careerIcon + ' ' + styles.iconManagement}>
	//       				</div>
	//       				<div className={styles.careerdivider}>
	// 	      				<div className={styles.careercategory}>
	// 	      					<p>Management</p>
	// 	      				</div>
	// 		      			<ul className={styles.joblists}>
	// 		      				<li><a href="">Position Title</a> - New York</li>
	// 		      				<li><a href="">Position Title</a> - New York</li>
	// 		      				<li><a href="">Position Title</a> - New York</li>
	// 		      			</ul>
	// 	      			</div>
	//       			</div>
	//       			<div className={styles.careerblock}>
	//       				<div className={styles.careerIcon + ' ' + styles.iconOther}>
	//       				</div>
	//       				<div className={styles.careerdivider}>
	// 	      				<div className={styles.careercategory}>
	// 	      					<p>Other</p>
	// 	      				</div>
	// 		      			<ul className={styles.joblists}>
	// 		      				<li><a href="">Position Title</a> - New York</li>
	// 		      				<li><a href="">Position Title</a> - New York</li>
	// 		      				<li><a href="">Position Title</a> - New York</li>
	// 		      			</ul>
	// 	      			</div>
	//       			</div>
	//       		</Col>
	//       </Row>
  //   	</div>
  //   </div>
  // );
};

export default Careers;