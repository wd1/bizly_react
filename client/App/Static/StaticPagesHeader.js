import React from 'react';
import styles from './StaticPagesHeader.css';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';

  

const StaticPagesHeader = (props) => {


 

  return (
    <div className={styles.subheadwrap}> 
        <div className="container">
    		<Row>
    			<Col xs={12} className={styles.navcol}> 
    				<a href="/about" className={props.active == 'about' ? styles.subnavactive : styles.subnavlink}>About</a>
    				<a href="https://angel.co/bizly/jobs" target="_blank"  className={props.active == 'careers' ? styles.subnavactive : styles.subnavlink}>Jobs</a>
    				<a href="/press" className={props.active == 'press' ? styles.subnavactive : styles.subnavlink}>Press</a>
    				<a href="/privacy-policy" className={props.active == 'privacy' ? styles.subnavactive : styles.subnavlink}>Privacy</a>
    				<a href="/terms-and-conditions" className={props.active == 'terms' ? styles.subnavactive : styles.subnavlink}>Terms</a>
                    <a href="/contact" className={props.active == 'contact' ? styles.subnavactive : styles.subnavlink}>Contact</a>
                    <a href="https://blog.bizly.com/" target="_blank" className={props.active == 'blog' ? styles.subnavactive : styles.subnavlink}>Blog</a>
    			</Col>
	    	</Row> 
        </div>
    </div>
  );
};

export default StaticPagesHeader;