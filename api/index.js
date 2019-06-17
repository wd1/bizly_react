"use strict";
const express = require('express');
const axios = require('axios');
const objectAssign = require('object-assign');
const NODE_CONFIG = require('../NODE_CONFIG');
const router = new express.Router();

// TODO: break up into smaller files
const options = {
  baseURL: process.env.NODE_ENV === 'production' ? NODE_CONFIG.API_ENDPOINT.PRODUCTION : NODE_CONFIG.API_ENDPOINT.STAGING,
  headers: {
    'api-key': NODE_CONFIG.API_KEY.STAGING,
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache,no-store,must-revalidate,max-age=-1,private'
  },
  validateStatus: function (status) {
    return (status >= 200 && status < 300) || status === 304;
  },
};

const apiRequest = axios.create(options);

const apiCaller = (url, method, req, res, data) => {
  // req.get('user-agent')
  if (req.cookies['Bizly-User']) {
    console.log(`Bearer ${req.cookies['Bizly-User'].token}`);
    apiRequest.defaults.headers['Authorization'] = 'Bearer '+ req.cookies['Bizly-User'].token;
  }

  apiRequest[method](url, data)
    .then( response => {
      if ( url === '/authenticate' || url === '/register' || url === 'socialauth/' ) {
        var data = response.data.data;

        const cookieValue = {
          token: data.attributes.token,
          id: data.id,
          name: data.attributes.name || data.attributes.first_name + ' ' + data.attributes.last_name,
          email: data.attributes.email,
          company: data.attributes.company
        };

        res.cookie('Bizly-User', cookieValue, {maxAge: 604800000, httpOnly: true, secure: process.env.NODE_ENV === 'production'});
      }

      res.status(response.status).send(response.data);
    })
    .catch( error => {
      res.status(error.status).send(error.data);
    });
};

router.get('/login-check', (req, res) => {
  if ( req.cookies['Bizly-User'] ) {
    const userInfo = {
      name: req.cookies['Bizly-User'].name,
      id: req.cookies['Bizly-User'].id,
      company: req.cookies['Bizly-User'].company,
      email: req.cookies['Bizly-User'].email
    }
    res.status(200).send(userInfo);
  } else {
    res.send('no info');
  }
});

router.get('/sign-out', (req, res) => {
  res.clearCookie('Bizly-User');
  res.status(200).send('signed out');
})

// Bizly registration
router.post('/register', (req, res) => {
  const regDetails = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  };

  apiCaller('/register', 'post', req, res, regDetails);
});

// Login
router.post('/login', (req, res) => {
  const regDetails = {
    email: req.body.email,
    password: req.body.password
  };

  apiCaller('/authenticate', 'post', req, res, regDetails);
});

// Social Authenication
router.post('/login-social', (req, res) => {
  apiCaller('socialauth/', 'post', req, res, req.body);
});

// Forgot Password
router.post('/recover/password', (req, res) => {
  apiCaller('password/forgot/', 'post', req, res, req.body);
});

// Reset Password
router.post('/reset/password', (req, res) => {
  apiCaller('password/reset/', 'post', req, res, req.body);
});

// GET Featured Properties
// /properties?featured=true
router.get('/properties/featured', (req, res) => {
  apiCaller('properties?search=featured:1', 'get', req, res);
});

// GET Properties
router.get('/properties/listings', (req, res) => {
  // TODO: put search details in params and submit to API
  apiCaller('properties?include=tags,amenities', 'get', req, res);
});

// GET Property Search
router.get('/properties/search', (req, res) => {
  apiCaller(`properties?search=location:${req.query.location};date:${req.query.date};time:${req.query.time};guests:${req.query.guests}&include=tags,amenities`, 'get', req, res);
});

// GET Property details
router.get('/property/:slug', (req, res) => {
  apiCaller('properties?search=slug:' + req.params.slug + '&include=details,images,rooms,amenities,rooms.amenities.policies,rooms.amenities,tags,policies,rooms.policies,rooms.blockedTimes,rooms.ratePlans', 'get', req, res);
});

// POST Create order
router.post('/order/create', (req, res) => {
  apiCaller('orders/', 'post', req, res, req.body);
});

// POST Send invitations
router.post('/:id/invitations', (req, res) => {
  const invitations = {
    reservation_id : req.params.id,
    invitations: req.body
  };

  apiCaller('invitations/', 'post', req, res, invitations);
});

// PUT modify reservation
router.put('/order/:id', (req, res) => {
  apiCaller('reservations/' + req.params.id, 'put', req, res, req.body);
});

// POST add or remove amenities
router.post('/order/amenities/:id', (req, res) => {
  apiCaller('reservations/' + req.params.id + '/amenities', 'post', req, res, req.body);
});

// POST Modify meeting details
router.post('/order/details/:id', (req, res) => {
  apiCaller('reservations/' + req.params.id + '/meetingdetails', 'post', req, res, req.body);
});

// POST add user credit cards
router.post('/user/add/card', (req, res) => {
  apiCaller('creditcards/', 'post', req, res, req.body);
});

// GET reservations
router.get('/user/:id/reservations', (req, res) => {
  apiCaller('users/' + req.params.id + '/reservations?include=lineitems', 'get', req, res);
});

// GET user credit cards
router.get('/user/:id/cards', (req, res) => {
  apiCaller('users/'+ req.params.id + '/creditcards', 'get', req, res, req.body);
});

// POST process order
router.post('/order/process/:id', (req, res) => {
  apiCaller('orders/' + req.params.id + '/process', 'post', req, res, req.body);
});

// POST apply promo code
router.post('/promocode/order/:id', (req, res) => {
  apiCaller('orders/' + req.params.id + '/promocodes', 'post', req, res, req.body);
});

// DELETE remove promo code
router.delete('/promocode/order/:id', (req, res) => {
  apiCaller(`orders/${req.params.id}/promocodes`, 'delete', req, res);
});

// POST submit general form
router.post('/form/submit', (req, res) => {
  apiCaller('forms/', 'post', req, res, req.body);
});

// GET vip ticket
router.get('/invites/:inviteId', (req, res) => {
  apiCaller(`/invitations/${req.params.inviteId}`, 'get', req, res);
});

module.exports = router;