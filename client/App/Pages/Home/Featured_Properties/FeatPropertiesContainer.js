import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchProperties, toggleNotifyModal } from './actions';
import FeatProperties from './FeatProperties';

const mapStateToProps = (state, ownProps) => {
  return {
    properties: state.Homepage.Properties.properties.items,
    fetched: state.Homepage.Properties.fetched,
    isFetching: state.Homepage.Properties.properties.isFetching,
    notFound: ownProps.notFound
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFeatured: () => dispatch( fetchProperties() ),
    toggleModal: () => dispatch( toggleNotifyModal() )
  };
};

const FeatPropertiesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FeatProperties);

FeatPropertiesContainer.propTypes = {
  properties: PropTypes.array
};

export default FeatPropertiesContainer;