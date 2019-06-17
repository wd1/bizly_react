// import moment from 'moment';

const SearchFormValidation = (values) => {
	const errors = {};

	errors.location = location(values.location);
	errors.date = date(values.date);
	errors.time = time(values.time);
	errors.guests = guests(values.guests);

	return errors;
};

function location (location) {
 return '';
};

function date (date) {

};

function time (time) {

};

function guests (guests) {
	if (!/^[0-9]*$/.test(email)) return 'Please enter a number';
	if (parseInt(guests) < 1) return 'Please enter at least 1 guest';
	if (parseInt(guests) > 40) return 'Please use the large event form';
	// ^^ remove when you think of how to deal outside of validation
};

export default SearchFormValidation;