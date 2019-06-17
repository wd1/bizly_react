import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App/App';
import Home from './App/Pages/Home/index';
import Listings from './App/Pages/Listings/index'; // this will change to container when search params are implemented
import PropertyContainer from './App/Pages/Property/container';
import CheckoutContainer from './App/Pages/Checkout/container';
import ConfirmationPageContainer from './App/Pages/Confirmation/ConfirmationPageContainer';
import MyReservationsContainer from './App/Pages/My_Reservations/container';
import ResetPasswordContainer from './App/Pages/Reset_Password/container';
import VIPTicketPageContainer from './App/Pages/VIP_Ticket/container';
import Registration from './App/Pages/Registration/index';
import About from './App/Static/About';
import Careers from './App/Static/Careers';
import Contact from './App/Static/Contact';
import NewYork from './App/Static/NewYork';
import Membership from './App/Static/Membership';
import Partnerships from './App/Static/Partnerships';
import Affiliates from './App/Static/Affiliates';
import Press from './App/Static/Press';
import Privacy from './App/Static/Privacy';
import Terms from './App/Static/Terms';
import NotFound from './App/Static/404';
import Blog from './App/Static/Blog';

const routes = {
	path: '/',
	component: App,
	indexRoute: { component: Home },
	childRoutes: [
		{ path: 'registration', component: Registration },
		{ path: 'bizlybeat', component: Blog },
		{ path: 'blog', component: Blog },
		{ path: 'properties', component: Listings },
		{ path: 'properties/search', query: {date: true, time: true, guests: true, location: true}, component: Listings },
		{ path: 'property/:slug', component: PropertyContainer },
		{ path: 'checkout', component: CheckoutContainer },
		{ path: 'confirmation', component: ConfirmationPageContainer },
		{ path: 'reservations', component: MyReservationsContainer },
		{ path: 'passwords/reset', query: {email: true, token: true}, component: ResetPasswordContainer },
		{ path: 'invitations/:inviteId', component: VIPTicketPageContainer },
		{ path: 'about', component: About },
		{ path: 'about-us', component: About },
		{ path: 'careers', component: Careers },
		{ path: 'jobs', component: Careers},
		{ path: 'contact', component: Contact },
		{ path: 'new-york', component: NewYork },
		{ path: 'membership', component: Membership },
		{ path: 'partnerships', component: Partnerships },
		{ path: 'affiliates', component: Affiliates },
		{ path: 'press', component: Press },
		{ path: 'privacy-policy', component: Privacy },
		{ path: 'terms-and-conditions', component: Terms },
		{ path: 'terms-of-use', component: Terms },
		{ path: '*', component: NotFound }
	]
};

export default routes;