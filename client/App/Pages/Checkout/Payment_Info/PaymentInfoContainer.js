import { reduxForm } from 'redux-form';
import objectAssign from 'object-assign';
import { getCreditCards, addCreditCard, selectCard } from './PaymentActions';
import { CreditCardValidation as validate } from './validation';
import mclogo from '../../../../assets/cc-mc.png';
import visalogo from '../../../../assets/cc-visa.png';
import amexlogo from '../../../../assets/cc-amex.png';
import dclogo from '../../../../assets/cc-dc.png';
import genlogo from '../../../../assets/cc-generic.png';
import disclogo from '../../../../assets/cc-discover.png';
import jcblogo from '../../../../assets/cc-jcb.png';
import PaymentInfo from './PaymentInfo';

const mapStateToProps = (state) => {
  const cardsFetched = state.Checkout.creditCard.cardsFetched;
  const cards = state.Checkout.creditCard.cards;
  const selectedCard = state.Checkout.creditCard.selected;
  const creditCardNoLogo = cards.find(card => card.id === selectedCard);
  const logo = selectedCard !== 'Add' ? mapCardToLogo(creditCardNoLogo) : '';
  const creditCard = objectAssign({}, creditCardNoLogo, {logo});


  return {
    apiErrors: state.Checkout.errors.messages,
    showError: state.Checkout.errors.show,
    fetchingCards: state.Checkout.creditCard.isFetchingCards,
    cardsFetched,
    cards,
    userId: state.Login.info.id,
    selectedCard,
    creditCard
  };

  function mapCardToLogo(card) {
    const logos = {
      mastercard: mclogo,
      visa: visalogo,
      american: amexlogo,
      diners: dclogo,
      jcb: jcblogo,
      discover: disclogo,
      generic: genlogo
    }

    const cardName = card.brand.split(' ')[0].toLowerCase();
    if (Object.keys(logos).includes(cardName)) return logos[cardName];
    return logos.generic;
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submit: (data) => dispatch( addCreditCard(data) ),
    getCards: (id) => dispatch( getCreditCards(id) ),
    selectCard: (id) => dispatch( selectCard(id) )
  };
};

const fields = ['cardNumber', 'expDate', 'cvc', 'name', 'zip'];

const formConfig = {
  form: 'checkout',
  fields,
  validate
};

const PaymentInfoContainer = reduxForm(
  formConfig,
  mapStateToProps,
  mapDispatchToProps
)(PaymentInfo);

export default PaymentInfoContainer;