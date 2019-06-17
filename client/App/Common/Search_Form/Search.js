import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import SearchFormContainer from './SearchFormContainer';
import SearchModal from './SearchModal';
import styles from './Search.css';

const Search = ({ isHomepage, openModalClick, closeModalClick, showModal }) => {
  return (
    <div>
      <div className={styles.form + " hidden-xs " + styles.hidexs}>
        <SearchFormContainer isHomepage={isHomepage}/>
      </div>
      <div className={styles.form + " visible-xs-block " + styles.showxs} onClick={openModalClick}>
        <input type="text" readOnly={true} className={styles.mobileInput} placeholder="Where do you want to meet?"/>
        <Button className={styles.button}><i className="fa fa-search"></i></Button>
      </div>
      <SearchModal show={showModal} closeModal={closeModalClick}/>
    </div>
  );
};

Search.propTypes = {
  showModal: PropTypes.string,
  openModalClick: PropTypes.func,
  closeModalClick: PropTypes.func
};

export default Search;