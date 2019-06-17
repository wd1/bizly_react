export const SignupValidation = (values) => {
	const errors = {};
	errors.email = email(values.email);
	errors.firstName = name(values.firstName);
	errors.lastName = name(values.lastName);
	errors.password = password(values.password);

	return errors;
};

export const LoginValidation = (values) => {
	console.log('login val');
	const errors = {};
	errors.email = email(values.email);
	errors.password = password(values.password);
};

export function email (email) {
	if (!email) return 'Required';
	if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
		return 'Please enter a valid email address';
	}
};

function name (name) {
	if (!name) return 'Required';
	if (name.length < 2) return 'Name must be at least 2 letters';
	if(!/^[a-zA-Z ]*$/.test(name)) return 'Please use alphanumeric characters only';
};

function password (password) {
	if (!password) return 'Required';
	if (password.length < 6) return 'Password must be at least 6 characters';
}