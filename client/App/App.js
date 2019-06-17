import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import { Grid } from 'react-bootstrap';
import Intercom from 'react-intercom';
import HeaderContainer from './Common/Header/HeaderContainer';
import Footer from './Common/Footer/Footer';
import staticContent from './Common/staticContent';
import { version } from '../../package.json';

require('../assets/fonts/ProximaNova-Light.css');
require('../assets/fonts/ProximaNova-Regular.css');
require('../assets/fonts/ProximaNova-Bold.css');
require('../assets/fonts/ProximaNova-Semibold.css');
require('../assets/fonts/BauerBodoniStd-Italic.css');
require('../assets/css/bootstrap-overrides.css');
require('../favicon.ico');

const App = (props) => {
  return (
    <div>
    	<Grid fluid>
	      <HeaderContainer version={version} static={staticContent.app.footer}/>
        <Intercom appID="c47nivjr"/>
	      {React.cloneElement(props.children, {static: staticContent})}
	      <Footer static={staticContent.app.footer}/>
	    </Grid>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element,
  static: PropTypes.object
};

export default App;