import React from 'react';
import styles from './SpecialRequests.css';
import { FormGroup } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

// on submit, update state and send to API
const SpecialRequests = ({submitRequests, handleSubmit, fields: {allergies, roomSetup, avNeeds, event, other}}) => {
  return (
    <div>
      <h1>SPECIAL REQUESTS</h1>
        <form autoComplete="none" onBlur={handleSubmit(submitRequests)}>
          <Row className={styles.formrow}>
            <Col xs={12}  >
              <span className={styles.icon}>
                <span className={styles.allergy} />
              </span>
              <input type="text"  className="form-control" placeholder="Allergies" {...allergies}/>
            </Col>
          </Row>
          <Row className={styles.formrow}>
            <Col xs={12}  >
              <span className={styles.icon}>
                <span className={styles.roomsetup} />
              </span>
              <input type="text"  className="form-control" placeholder="Room Setup" {...roomSetup}/>
            </Col>
          </Row>
          <Row className={styles.formrow}>
            <Col xs={12}  >
              <span className={styles.icon}>
                <span className={styles.av} />
              </span>
              <input type="text" className="form-control"  placeholder="Audio Visual Needs" {...avNeeds}/>
            </Col>
          </Row>
          <Row className={styles.formrow}>
            <Col xs={12}  >
              <span className={styles.icon}>
                <span className={styles.eventlog} />
              </span>
              <input type="text"  className="form-control" placeholder="Event Logistics" {...event}/>
            </Col>
          </Row>
          <Row className={styles.formrow}>
            <Col xs={12}  >
              <span className={styles.icon}>
                <span className={styles.other} />
              </span>
              <input type="text" className="form-control"  placeholder="Other" {...other}/>
            </Col>
          </Row>
        </form>
      <div>
        <div className={styles.infonotice}>PLEASE NOTE: <span className={styles.infoicon} /></div>
        <div className={styles.infosubtext}>The hotel may or may not be able to accomodate these requests and will email you to confirm</div>
      </div>
    </div>
  );
};

export default SpecialRequests;