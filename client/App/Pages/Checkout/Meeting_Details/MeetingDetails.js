import React from 'react';
import styles from './MeetingDetails.css';

// This will update in the state tree on submit
const MeetingDetails = ({companyName, meetingTitle, submitDetails, handleSubmit, fields: {company, title}}) => {
  return (
    <div>
      <h1>MEETING DETAILS</h1>
      <div>
        <form onBlur={handleSubmit(submitDetails)}>
          <span className={styles.inputwrap} >
            <input type="text" placeholder="Company Name" {...company}/>
          </span>
          <span className={styles.inputwrap} >
            <input type="text" placeholder="Meeting Title" {...title}/>
          </span>
        </form>
      </div>
    </div>
  )
};

export default MeetingDetails;