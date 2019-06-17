import moment from 'moment';

export const CreditCardValidation = (values) => {
  const errors = {
    cardNumber: cardNumber(values.cardNumber),
    expDate: expDate(values.expDate),
    cvc: cvc(values.cvc),
    name: name(values.name),
    zip: zip(values.zip)
  };
  // console.log('all these mistakes', errors);
  return errors;
};

function cardNumber (cardNumber) {
  if (!cardNumber) return 'Required';
  if ( cardNumber.length < 14 ) return 'Credit card number must be at least 14 digits long';
  if ( cardNumber.length > 16 ) return 'Credit card number must not be more than 16 digits';
  if (!/^[0-9]*$/.test(cardNumber)) return 'Please enter numbers only';
  return;
};

function expDate (expDate) {
  console.log('exp date', expDate );
  if (!expDate) return 'Required';
  if (expDate.length < 5) return 'Please enter a valid expiration date';
  if (expDate.split('/') < 2) return 'Please insert a forward slash (/) between the month and year';
  // TODO check if month and year are before today's
  return;
};

function cvc (cvc) {
  if (!cvc) return 'Required';
  if (cvc.length < 3 || cvc.length > 4) return 'Please enter the CVC on your card';
  if (!/^[0-9]*$/.test(cvc)) return 'Please enter numbers only';
  return;
};

function name (name) {
  if (!name) return 'Required';
  if (name.length > 23) return 'Please limit your name to 23 characters only';
  if (!/^[a-zA-Z0-9'-\s]*$/.test(name)) return 'Please limit your characters to alphanumeric characters';
  return;
};

function zip (zip) {
  if (!zip) return 'Required';
  if (!/^[0-9]*$/.test(zip)) return 'Please enter numbers only';
  if (zip.length < 4 || zip.length > 6) return 'Please enter a zip code 4-6 digits long';
  return;
};