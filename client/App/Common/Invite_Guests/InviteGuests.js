import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './InviteGuests.css';
import InviteConfirmationModal from '../Invite_Confirmation_Modal/InviteConfirmationModal';

class InviteGuests extends Component {
  onToggleModal = () => {
    this.props.closeInvitationSentModal();
  }

  onSubmit = () => {
    const {
      reservation,
      closeInvitationSentModal,
      sendInvitations,
      updateMeetingDetails
    } = this.props;

    const refs = Object.keys(this.refs).filter((key) => {
      return (key !== 'title' && key !== 'description');
    });

    const title = this.refs.title.value;
    const description = this.refs.description.value;
    const invitations = [];

    refs.forEach((key) => {
      const email = this.refs[key].value;

      if (email) {
        invitations.push({
          email,
          invite_type: 'participant'
        });
      }
    });

    if (invitations.length) {
      sendInvitations(reservation.id, invitations);
    }

    if (title || description) {
      const meeting_details = {};

      if (title) {
        meeting_details.title = title;
      }

      if (description) {
        meeting_details.description = description;
      }

      updateMeetingDetails(reservation.id, { meeting_details });
    }
  }

  render() {
    const { 
      toggleConfirmation, 
      confirmationView, 
      inviteConfirmation } = this.props;

    const { 
      hostName, 
      hostEmail, 
      hostPhone,
      hostCompany,
      guests } = this.props.reservation;

    function meetingDetails() {
      const details = [];

      if (hostName) {
        details.push(
          <Col key={hostName} xs={6} sm={6} md={3} >
            <div className={styles.iconleft}><span className={styles.iconguest}></span></div><span className={styles.invitetext}>{ hostName }</span>
          </Col>
        );
      }

      if (hostEmail) {
        details.push(
          <Col key={'@' + hostEmail} xs={6} sm={6} md={3}  >
            <div className={styles.iconleft}><span className={styles.iconenvelope}></span></div><span className={styles.invitetext}>{ hostEmail }</span>
          </Col>
        );
      }

      if (hostPhone) {
        details.push(
          <Col key={hostPhone} xs={6} sm={6} md={3}  >
            <div className={styles.iconleft}><span className={styles.iconphonebook}></span></div><span className={styles.invitetext}>{ hostPhone }</span>
          </Col>
        );
      }

      if (hostCompany) {
        details.push(
          <Col key={hostCompany} xs={6} sm={6} md={3}  >
            <div className={styles.iconleft}><span className={styles.iconcompany}></span></div><span className={styles.invitetext}>{ hostCompany }</span>
          </Col>
        );
      }

      return details;
    }

    function createInviteGuestInputs(number) {
      const invites = [];
      const invite = (key) => {
        return (                
          <Row key={key} className={styles.formrow}>
            <Col xs={12} >
              <span className={styles.icon}>
                <span className={styles.guestnumber}>1</span>
              </span>
              <input type="text" name="invite" ref={'invite.' + key} className="form-control"  placeholder="Enter email here"/>
            </Col>
          </Row>
        )
      };

      for (let i = 0; i < guests; i++) {
        invites.push(invite(i));
      }

      return invites;
    }

    return (
      <div className={styles.defaultstyle}>
        <Row className={styles.invitelead}>
          <Col xs={12} > 
            <h1 className={styles.invite}>Invite Guests</h1>
            <p className={styles.inviteintro}>Invite guests to send the the boarding pass and get seamless RSVP processing, calendar invite files and collect allergy and food preferences from guests</p>
          </Col>
        </Row>
        <Row className={styles.inviterow}>
          {meetingDetails()}
        </Row>
        <div className={styles.invitelist}>
          <Row  className={styles.guestwrapper}>
            <Col xs={12} sm={6}>
              <h1 className={styles.guestlistheader}>Guest List</h1>
              {createInviteGuestInputs(guests)}
            </Col> 
              <Col xs={12} sm={6} >
                <Row className={styles.subjectrow}>
                    <Col xs={12}   >
                      <fieldset className="form-group">
                        <label htmlFor="subject" className={styles.checkoutlabel}>Meeting Subject</label>
                        <input type="text" name="title" ref="title" className="form-control" id="title" placeholder="Type something here." />
                      </fieldset>
                  </Col>
                </Row>
                <Row className={styles.descriptionrow}>
                    <Col xs={12}   >
                      <fieldset className="form-group">
                        <label htmlFor="subject" className={styles.checkoutlabel}>Meeting Description</label>
                        <textarea ref="description" placeholder={'Type something here.'} className={styles.meetingdescription}></textarea>
                      </fieldset>
                  </Col>
                </Row>
                <Row className={styles.buttonrow}>
                    <Col xs={12}   >
                      <button className={styles.addcard} onClick={this.onSubmit}>Send</button>
                    </Col>
                </Row>
            </Col>
          </Row>
        </div>
        <InviteConfirmationModal show={inviteConfirmation} close={this.onToggleModal}/>
      </div>
    );
  }
};

export default InviteGuests;