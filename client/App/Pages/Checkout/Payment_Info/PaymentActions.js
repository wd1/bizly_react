import axios from 'axios';

export const ADDING_CARD = 'ADDING_CARD';
export const CARD_ADDED = 'CARD_ADDED';
export const FAIL_CARD_ADD = 'FAIL_CARD_ADD';

export function addCreditCard(cardDetails) {
  const ccObj = formatCreditCardObj(cardDetails);
	return dispatch => {
		dispatch( addingCard() );
		return axios.post('/api/user/add/card', ccObj)
			.then(response => dispatch( cardAdded(response.data) ))
			.catch(error => dispatch( cardAddFail(error.data) ));
	};
};

function formatCreditCardObj(card) {
  return {
    name: card.name,
    card_number: card.cardNumber,
    card_cvc: card.cvc,
    card_exp_month: card.expDate.split('/')[0] * 1,
    card_exp_year: card.expDate.split('/')[1] * 1,
    card_zip: card.zip
  };
};

export function addingCard() {
  return {
    type: ADDING_CARD
  };
};

export function cardAdded({data}) {
  const card = apiCardResponseStrip(data);
  return {
    type: CARD_ADDED,
    card: [card]
  };
};

export function cardAddFail({errors}) {
  return {
    type: FAIL_CARD_ADD,
    errors
  };
};

export const GETTING_CARDS = 'GETTING_CARDS';
export const CARDS_RETRIEVED = 'CARDS_RETRIEVED';
export const CARD_RETRIEVAL_FAIL = 'CARD_RETRIEVAL_FAIL';

export function getCreditCards(id) {
	return dispatch => {
		dispatch( gettingCards() );
		return axios.get('/api/user/'+ id +'/cards')
			.then(response => dispatch( cardsRetrieved(response.data) ))
			.catch(error => dispatch( cardRetrievalFail(error.data) ));
	};
};

export function gettingCards() {
  return {
    type: GETTING_CARDS
  };
};

export function cardsRetrieved({data}) {
  const cards = data.map(card => apiCardResponseStrip(card));
  return {
    type: CARDS_RETRIEVED,
    cards
  };
};

export function cardRetrievalFail({errors}) {
  return {
    type: CARD_RETRIEVAL_FAIL,
    errors
  };
};

function apiCardResponseStrip(data) {
  return {
    id: data.id,
    name: data.attributes.name,
    brand: data.attributes.card_brand,
    last4: data.attributes.card_last_four,
    expMonth: data.attributes.card_exp_month,
    expYear: data.attributes.card_exp_year
  };
};

export const SELECT_CARD = 'SELECT_CARD';

export function selectCard(id) {
  return {
    type: SELECT_CARD,
    id
  };
};