import React from 'react';
import StaticPagesHeader from './StaticPagesHeader';
import styles from './Contact.css';

const Contact = () => {
  return (
    <div className={styles.staticwrap}> 
	    <div className={styles.staticinner}>
	    	<div className="container">
	    		<div className="row">
	    			<div className="col-xs-12">
	    				<h1 className={styles.heading}>General Inquiries</h1> 
	    			</div>
	    		</div>
	    		<div className="row">
	    			<div className="col-xs-12 col-sm-6">
	    				<div className={styles.contactinfo}>
	    					1460 Broadway<br />New York, NY 10036
	    				</div>
	    			</div>
	    			<div className="col-xs-12 col-sm-6">
	    				<div className={styles.contactinfo}>
	    					 <a href="mailto:hello@bizly.com">hello@bizly.com</a>
	    				</div>
	    			</div>
	    		</div>
	    		<div className={styles.divider}></div>
	    		<div className="row">
	    			<div className="col-xs-12 col-sm-4">
	    				<div className={styles.emaillinks}>
	    					<strong>Careers</strong><br /><a href="mailto:careers@bizly.com">careers@bizly.com</a>
	    				</div>
	    			</div> 
	    			<div className="col-xs-12 col-sm-4">
	    				<div className={styles.emaillinks}>
	    					<strong>Hotel Partnership Inquiries</strong><br /><a href="mailto:partners@bizly.com">partners@bizly.com</a>
	    				</div>
	    			</div> 
	    			<div className="col-xs-12 col-sm-4">
	    				<div className={styles.emaillinks}>
	    					<strong>Press</strong><br /><a href="mailto:media@bizly.com">press@bizly.com</a>
	    				</div>
	    			</div> 
	    		</div>
	    	</div>
	    </div>
	    <div className={styles.formouter}>
	    	<div className="row">
	    		<div className="col-xs-12 col-sm-6 col-sm-offset-3">
	    			<form>
		    			<h2 className={styles.formheader}>Drop us a note</h2>

				          <div className="form-group col-sm-12 col-md-6" >
				            <input type="text" tabIndex={1} autoFocus={true} className={styles.formgroupinput} placeholder="Name" /> 
				          </div>

				          <div className="form-group col-sm-12 col-md-6" >
				            <input type="email" tabIndex={2} className={styles.formgroupinput} placeholder="Email address"  /> 
				          </div>

				          <div className="form-group col-sm-12  " >
				            <textarea  className={styles.formgroupinput}>Message...</textarea> 
				          </div>

          					<div className={styles.buttonrow}><button>Send</button></div>
		    		</form>
	    		</div>
	    	</div>
	    </div>
    </div>
  );
};

export default Contact;