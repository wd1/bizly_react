import objectAssign from 'object-assign';
import { PROCESSING_ORDER, ORDER_PROCESSED, ORDER_FAIL, TOGGLE_TERM_AGREEMENT } from './actions';
import {
  ADDING_CARD,
  CARD_ADDED,
  FAIL_CARD_ADD,
  GETTING_CARDS,
  CARDS_RETRIEVED,
  CARD_RETRIEVAL_FAIL,
  SELECT_CARD
} from './Payment_Info/PaymentActions';
import { UPDATE_MEETING_DETAILS } from './Meeting_Details/MeetingDetailsActions';
import { UPDATE_SPECIAL_REQUESTS } from './Special_Requests/SpecialRequestsActions'

const CheckoutInitialState = {
  meetingDetails: {
    companyName: '',
    meetingTitle: ''
  },
  processingOrder: false,
  orderProcessed: false,
  addingCreditCard: false,
  creditCard: {
    selected: 'Add',
    isFetchingCards: false,
    cardsFetched: false,
    cards: [],
    errors: {}
  },
  specialRequests: '',
  agreedToTerms: false,
  errors: {
    show: false,
    messages: []
  },
  reservation: {},
  confirmationId: null
};

const Checkout = (state = CheckoutInitialState, action) => {
  switch (action.type) {
    case TOGGLE_TERM_AGREEMENT:
      return objectAssign({}, state, {agreedToTerms: !state.agreedToTerms});
    case UPDATE_MEETING_DETAILS:
      return objectAssign({}, state, {meetingDetails: mapMeetingDetails(action.data)});
    case UPDATE_SPECIAL_REQUESTS:
      return objectAssign({}, state, {specialRequests: action.description});
    case PROCESSING_ORDER:
      return objectAssign({}, state, {processingOrder: true});
    case ORDER_PROCESSED:
      return objectAssign({}, state, {processingOrder: false, orderProcessed: true, agreedToTerms: false, confirmationId: action.data.order.reservations[0].meeting_details.reservation_id, reservation: action.reservation});
    case ORDER_FAIL:
      return objectAssign({}, state, {processingOrder: false, errors: {show: true, messages: action.messages}});
    case ADDING_CARD:
      return objectAssign({}, state, {addingCreditCard: true, errors: CheckoutInitialState.errors});
    case CARD_ADDED:
      return objectAssign({}, state, {addingCreditCard: false, creditCard: creditCard(state.creditCard, action)});
    case FAIL_CARD_ADD:
      return objectAssign({}, state, {addingCreditCard: false, errors: {show: true, messages: action.errors.messages}});
    case GETTING_CARDS:
    case CARD_RETRIEVAL_FAIL:
    case CARDS_RETRIEVED:
    case SELECT_CARD:
      return objectAssign({}, state, {creditCard: creditCard(state.creditCard, action)});
    default:
      return state;
  };
};

function mapMeetingDetails({company, title}) {
  return {
    companyName: company,
    meetingTitle: title
  };
};

function creditCard( state = state.creditCard, action ) {
  switch (action.type) {
    case CARD_ADDED:
      return objectAssign({}, state, {selected: action.card[0].id, cards: state.cards.concat(action.card)});
    case GETTING_CARDS:
      return objectAssign({}, state, {isFetchingCards: true});
    case CARDS_RETRIEVED:
      return objectAssign({}, state, {isFetchingCards: false, cardsFetched: true, selected: action.cards.length > 0 ? action.cards[0].id : 'Add', cards: action.cards});
    case CARD_RETRIEVAL_FAIL:
      return objectAssign({}, state, {isFetchingCards: false, errors: action.errors});
    case SELECT_CARD:
      return objectAssign({}, state, {selected: action.id});
  }
}

export default Checkout;