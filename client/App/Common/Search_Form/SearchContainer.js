import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from './actions';
import Search from './Search';

const mapStateToProps = (state, ownProps) => {
  return {
    showModal: state.Search.showModal,
    isHomepage: ownProps.isHomepage
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openModalClick: () => {
      dispatch( openModal() );
    },
    closeModalClick: () => {
      dispatch( closeModal() );
    }
  };
};

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default SearchContainer;