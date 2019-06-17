import { connect } from 'react-redux';
import moment from 'moment';
import { browserHistory } from 'react-router';
import { removeAllFilters } from '../../Pages/Listings/actions';
import { rfpToggle, searchProperties, selectLocation } from './actions';
import SearchForm from './SearchForm';

const mapStateToProps = (state, ownProps) => {
	const location = state.Search.search.location;
	return {
		error: state.Search.error,
		isHomepage: ownProps.isHomepage,
		location,
		guests: state.Search.search.guests,
		duration: state.Search.search.duration,
		time: state.Search.search.time,
		date: state.Search.search.date,
		reqModal: state.Search.reqModal
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		rfpToggle: () => dispatch( rfpToggle() ),
		selectLocation: (location, isHomepage) => dispatch( selectLocation(location, isHomepage) ),
		search: (event, searchParams) => {
			event.preventDefault();
			dispatch( searchProperties(searchParams) )
		},
		removeAllFilters: () => {
			dispatch( removeAllFilters() )
		}
	};
};

const SearchFormContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchForm);

export default SearchFormContainer;