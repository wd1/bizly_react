import React, { PropTypes } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLink, Link } from 'react-router';
import LoginModal from './Login_Signup/LoginModal';
import LogoutAlertModal from './Logout_Alert_Modal/LogoutAlertModal';
import styles from './Header.css';

const Header = (props) => {
  if ( !props.loggedIn && !props.loginCheck && !props.checkingLogin ) { props.checkIfLoggedIn(); }
  //console.log('props version', props.version);
  const location = '';// window ? window.location.pathname : '';
  const shouldAlert = location.split('/').includes('checkout');
  const inReservations = location.split('/').includes('reservations');
  if (shouldAlert || inReservations) var shouldRedirect = true;
	return (
    <div>
      <div className="hidden-xs">
    		<Navbar fixedTop className={styles.bar}>
          <Navbar.Header className={styles.header}>
            <Navbar.Brand>
              <IndexLink to="/" className={styles.logo}/>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem className={props.loggedIn ? styles.navLinks : styles.noDisplay} href="/reservations">{props.name}</NavItem>
              <NavItem className={styles.navLinks} eventKey={2} href="https://support.bizly.com">Support</NavItem>
              { !props.onRegPage ?
              <NavItem className={props.loggedIn ? styles.noDisplay : styles.navLinks}
                onClick={() => {
                  props.openSignup();
                  analytics.track('SIGN_UP_BUTTON');
                }}>
                  Sign Up
              </NavItem> : false }
              <NavItem
                className={props.loggedIn ? styles.navLinksBox : styles.noDisplay}
                onClick={() => {
                  props.signOut(shouldAlert, shouldRedirect);
                  analytics.track('SIGN_OUT_BUTTON');
                }}>
                  Sign Out
                </NavItem>
              <NavItem
                className={props.loggedIn ? styles.noDisplay : styles.navLinksBox}
                onClick={() => {
                  analytics.track('LOG_IN_BUTTON');
                  props.openModalClick();
                }}>
                  Login
                </NavItem>
            </Nav>
          </Navbar.Collapse>
    		</Navbar>
      </div>
      <div className="visible-xs-block">
        <Navbar fixedTop className={styles.bar}>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem className={props.loggedIn ? styles.noDisplay : styles.navLinks} onClick={props.openModalClick}>Login</NavItem>
              <NavItem className={props.loggedIn ? styles.navLinks : styles.noDisplay} href="/reservations">{props.name}</NavItem>
              <NavItem className={props.loggedIn ? styles.noDisplay : styles.navLinks} onClick={props.openSignup}>Sign Up</NavItem>
              <NavItem className={props.loggedIn ? styles.navLinks : styles.noDisplay} onClick={() => props.signOut(shouldAlert, shouldRedirect)}>Sign Out</NavItem>
                {props.static.mobile.map(mapHeaderLinks)}
                <NavItem className={styles.downloadbutton} href="https://itunes.apple.com/us/app/bizly-instant-meetings-at/id1043106556">Download the App</NavItem>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Header>
            <Navbar.Toggle className={styles.biztoggle} />
            <Navbar.Brand>
              <IndexLink to="/" className={styles.logo}/>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
      <LoginModal {...props} />
      <LogoutAlertModal logOut={props.signOut} show={props.alert} hide={props.logOutAlert}/>
    </div>
	);
};

Header.propTypes = {
  showModal: PropTypes.bool,
  showSignup: PropTypes.bool,
  openModalClick: PropTypes.func,
  closeModalClick: PropTypes.func,
  switchToLoginClick: PropTypes.func,
  switchToSignupClick: PropTypes.func
};



export default Header;


// add logic to handle links to outside web app
function mapHeaderLinks (link, index, arr) {
  return (
      <NavItem key={index} href={link.link} target="_blank" className={styles.navLinks}>
        {link.label}
      </NavItem>
  );
};