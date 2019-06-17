/* eslint no-console: 0 */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { Router, browserHistory, applyRouterMiddleware, match, RouterContext } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import createHistory from 'react-router/lib/createMemoryHistory';
import useScroll from 'react-router-scroll';
import UAParser from 'ua-parser-js';

import routes from './client/routes';

import configureDevStore from './client/store';
import configureProdStore from './client/store.prod.js';

import Html from './helpers/Html';

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');
const api = require('./api');

const isDeveloping = process.env.NODE_ENV === 'development';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/api', api);
app.use('/static', express.static('dist'));

process.on('uncaughtException', function(err) {
  console.log('wtf is going on', err);
});
console.log(`The NODE_ENV is ${process.env.NODE_ENV}`);
console.log('develop', isDeveloping);


// IE browser Compatibility

const parser = new UAParser();

if ( parser.getBrowser().name === 'IE' ) {
  require('array-includes').shim();
  require('es6-promise').polyfill();
}

const compiler = webpack(config);
const middleware = webpackDevMiddleware(compiler, {
  hot: true,
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
});

//app.use(middleware);
app.use(webpackHotMiddleware(compiler));

app.use((req, res) => {

  if (isDeveloping) {
    // Do not cache webpack stats: the script file would change since
    // hot module replacement is enabled in the development env
    webpackIsomorphicTools.refresh();
  }

  const store = process.env.NODE_ENV !== 'production' ? configureDevStore() : configureProdStore();
  const memoryHistory = createHistory(req.originalUrl);
  const history = syncHistoryWithStore(memoryHistory, store);

  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {

      // render the content with the store...
      const component = (
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      );

      // respond to client...
      res.status(200);
      global.navigator = {userAgent: req.headers['user-agent']};
      res.status(200).send(
        '<!DOCTYPE html>' + renderToString(<Html assets={webpackIsomorphicTools.assets()} component={component} store={store} />)
      );
    }
  });

});

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
