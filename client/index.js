/*eslint-disable import/default*/

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory, applyRouterMiddleware } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import useScroll from 'react-router-scroll';
import UAParser from 'ua-parser-js';
import routes from './routes';
import configureDevStore from './store';
import configureProdStore from './store.prod.js';
import { fetchProperties } from './App/Pages/Home/Featured_Properties/actions';
import moment from 'moment';

const parser = new UAParser();

if ( parser.getBrowser().name === 'IE' ) {
  require('array-includes').shim();
  require('es6-promise').polyfill();
}
var data = window.__data;
data.Search.search.date = moment(data.Search.search.date);

const store = process.env.NODE_ENV !== 'production' ? configureDevStore(data) : configureProdStore(data);
const history = syncHistoryWithStore(browserHistory, store);

history.listen(location => { analytics.page(location.pathname); })

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} render={applyRouterMiddleware(useScroll())}/>
  </Provider>, document.getElementById('app')
);
