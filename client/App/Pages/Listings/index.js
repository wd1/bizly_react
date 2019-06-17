import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { getListings, addFilter, removeFilter, noCallListingsChange, withCallListingsChange } from './actions';
import moment from 'moment';
import { Row, Col } from 'react-bootstrap';
import LoadingView from '../../Common/Loading_View/LoadingView';
import ListingsMain from './Listings_Main/ListingsMain';
import Filter from './Filter/Filter';
import styles from './index.css';
import SearchContainer from '../../Common/Search_Form/SearchContainer';

const Listings = (props) => {
  const {
    fetched,
    isFetching,
    fetchAttempts,
    getListings,
    getAllListings,
    properties,
    amenities,
    changeNoCall,
    changeWithCall,
    noCallListingsChange,
    withCallListingsChange,
    searchParams,
    onSearchPath } = props;

  if ( !fetched && !isFetching && fetchAttempts < 3 ) getListings(searchParams, onSearchPath);

  if ( !fetched && isFetching ) return (<LoadingView viewname="listings" />);

  if ( changeNoCall ) noCallListingsChange(searchParams);

  if ( changeWithCall ) withCallListingsChange(searchParams);

  const noPadding = {
    padding: 0
  };

  return (
    <div className={styles.listingswrap}>
      <div className="container">
        <Row>
          <Col md={3} className="hidden-sm hidden-xs" style={noPadding}>
              <Filter {...props} />
          </Col>
          <Col xs={12} sm={9} style={noPadding}>
            <div className={styles.searchwrap + " hidden-xs"}>
              <SearchContainer/>
            </div>
            <ListingsMain {...props}/>
        </Col>
        </Row>
      </div>
    </div>
  );
};

Listings.propTypes = {
  static: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  console.log(`pathname is ${ownProps.location.pathname}`);
  const changeWithCall = state.Search.search.changeWithCall;
  const changeNoCall = state.Search.search.changeNoCall;
  const onSearchPath = ownProps.location.pathname === '/properties/search';

  const searchParams = {
    location: changeNoCall || !onSearchPath ? state.Search.search.location : ownProps.location.query.location,
    date: changeWithCall || !onSearchPath ? state.Search.search.date : (ownProps.location.query.date ? moment(ownProps.location.query.date, 'YYYY-MM-DD') : state.Search.search.date),
    time: changeWithCall || !onSearchPath ? moment(state.Search.search.time, 'hh:mm a').format('HHmm') : ( ownProps.location.query.time ? ownProps.location.query.time : moment(state.Search.search.time, 'hh:mm a').format('HHmm') ),
    guests: changeNoCall || !onSearchPath ? state.Search.search.guests : (ownProps.location.query.guests ? ownProps.location.query.guests : state.Search.search.guests)
  }

  const properties = searchQueryFilters(state.ListingsPage.properties, searchParams);

  return {
    fetched: state.ListingsPage.fetched,
    isFetching: state.ListingsPage.isFetching,
    fetchAttempts: state.ListingsPage.fetchAttempts,
    searchParams,
    properties,
    amenities: state.ListingsPage.amenities,
    filters: state.ListingsPage.filters,
    changeNoCall,
    changeWithCall,
    onSearchPath
  };

  function searchQueryFilters(properties, searchParams) {
    if ( !onSearchPath ) return properties;
    const cities = {
      'NY': 'New York',
      'SF': 'San Francisco',
      'CHI': 'Chicago'
    }

    if ( searchParams.location ) {
      properties = properties.filter(byCity);
    }

    if ( searchParams.guests ) {
      properties = properties.filter(byMaxCapacity);
    }

    return properties;

    function byCity(property) {
      return property.city === cities[searchParams.location];
    }

    function byMaxCapacity(property) {
      return property.max_capacity >= searchParams.guests * 1;
    }
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllListings: () => {
      browserHistory.push('/properties');
      return dispatch( getListings({date: false}) );
    },
    getListings: (searchParams, onSearchPath) => dispatch( getListings(searchParams, onSearchPath) ),
    noCallListingsChange: (searchParams) => dispatch( noCallListingsChange(searchParams) ),
    withCallListingsChange: (searchParams) => dispatch( withCallListingsChange(searchParams) ),
    addFilter: (name, values) => dispatch( addFilter(name, values) ),
    removeFilter: (name, values) => dispatch( removeFilter(name, values) ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Listings);