import { connect } from 'react-redux';
import { selectGuests, openGuestsModal } from './GuestsDropdownActions';
import GuestsDropdown from './GuestsDropdown';

const mapStateToProps = (state, ownProps) => {
  const minCapacity = ownProps.pdp ? state.PropertyDetails.selectedRoom.attributes.min_capacity : 1;
  const maxCapacity = ownProps.pdp ? state.PropertyDetails.selectedRoom.attributes.max_capacity : 40;

  return {
    minCapacity,
    maxCapacity,
    guests: state.Search.search.guests,
    propStyles: ownProps.listingSearchStyles,
		isHomepage: ownProps.isHomepage,
    options: buildOptions()
  };

  function buildOptions() {
    const options = [];
    let numOfOptions = maxCapacity;
    // if ( ownProps.isHomepage && ( numOfOptions === 40 ) ) numOfOptions = 41;
    for (let i = minCapacity; i <= numOfOptions; i++) {
      options.push(i);
    }

    return options
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectGuests: (num, isHomepage) => {
      num = parseInt(num); // because 41 is always a fucking string
      if ( num === 41 ) {
        dispatch( openGuestsModal() );
      } else {
        dispatch( selectGuests(num, isHomepage) )
      }
    }
  };
};

const GuestsDropdownContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GuestsDropdown);

export default GuestsDropdownContainer;