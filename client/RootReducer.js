import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import { routerReducer } from 'react-router-redux';
import Cart from './App/Common/Cart/reducer';
import Login from './App/Common/Header/reducer';
import Search from './App/Common/Search_Form/reducer';
import Homepage from './App/Pages/Home/reducer';
import ListingsPage from './App/Pages/Listings/reducer';
import PropertyDetails from './App/Pages/Property/reducer';
import Checkout from './App/Pages/Checkout/reducer';
import Reservations from './App/Pages/My_Reservations/reducer';
import VipTicket from './App/Pages/VIP_Ticket/reducer';
import { CARD_ADDED } from './App/Pages/Checkout/Payment_Info/PaymentActions';

const rootReducer = combineReducers({
	form: formReducer.plugin({
		checkout: (state, action) => {
			switch(action.type) {
				case CARD_ADDED:
					return undefined;
				default:
					return state;
			}
		}
	}),
	routing: routerReducer,
	Cart,
	Checkout,
	Login,
  Search,
	Homepage,
	ListingsPage,
	PropertyDetails,
	Reservations,
	VipTicket
});

export default rootReducer;
