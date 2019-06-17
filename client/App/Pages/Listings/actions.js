import axios from 'axios';
import { browserHistory } from 'react-router';
import objectAssign from 'object-assign';

export const REQUEST_LISTINGS = 'REQUEST_LISTINGS';
export const GET_PROPERTIES_SUCCESS = 'GET_PROPERTIES_SUCCESS';
export const GET_PROPERTIES_FAIL = 'GET_PROPERTIES_FAIL';
export const REMOVE_ALL_FILTERS = 'REMOVE_ALL_FILTERS';
export const ADD_FILTER = 'ADD_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';

export function removeAllFilters() {
  return {
    type: REMOVE_ALL_FILTERS
  };
};

export function addFilter(name, values) {
  return {
    type: ADD_FILTER,
    filter: { [name]: values }
  };
};

export function removeFilter(name) {
  return {
    type: REMOVE_FILTER,
    name
  }
}

export function getListings(search, onSearchPath) {
  console.log(`in the action it is ${onSearchPath}`);
  return dispatch => {
    dispatch(requestListings(search));
    if ( onSearchPath ) {
      return axios.get(`/api/properties/search?location=${search.location}&date=${search.date.format('YYYY-MM-DD')}&time=${search.time}&guests=${search.guests}`)
        .then(response => dispatch(getPropertiesSuccess(response.data)) )
        .catch( error => dispatch(getPropertiesFail(error)) );
    } else {
      return axios.get('/api/properties/listings')
        .then(response => dispatch(getPropertiesSuccess(response.data)) )
        .catch( error => dispatch(getPropertiesFail(error)) );
    }
  };
};

export function requestListings(search) {
  return {
    type: REQUEST_LISTINGS,
    search
  };
};

export function getPropertiesSuccess(data) {
  const properties = buildPropertiesObjects(data);

  return {
    type: GET_PROPERTIES_SUCCESS,
    data: {
      properties: properties.data,
      amenities: properties.amenities,
      tags: properties.tags
    }
  };
};

export function getPropertiesFail(error) {
  return {
    type: GET_PROPERTIES_FAIL,
    error: error
  };
};

export const LISTINGS_CHANGE_NO_CALL = 'LISTINGS_CHANGE_NO_CALL';

export function noCallListingsChange(searchParams) {
  browserHistory.push(`/properties/search?location=${searchParams.location}&date=${searchParams.date.format('YYYY-MM-DD')}&time=${searchParams.time}&guests=${searchParams.guests}`);
  return {
    type: LISTINGS_CHANGE_NO_CALL
  }
}

export const LISTINGS_CHANGE_WITH_CALL = 'LISTINGS_CHANGE_WITH_CALL';

export function withCallListingsChange(searchParams) {
  browserHistory.push(`/properties/search?location=${searchParams.location}&date=${searchParams.date.format('YYYY-MM-DD')}&time=${searchParams.time}&guests=${searchParams.guests}`);
  return {
    type: LISTINGS_CHANGE_WITH_CALL
  };
};

function buildPropertiesObjects({data, included}) {
  const includedTags = arrayBuilder(included, 'tag');
  const amenities = {};
  const includedAmenities = [];

  included.forEach((item) => {
    if (item.type === 'amenity' && item.attributes.included === 1) {
      amenities[item.id] = item.attributes.name;
      includedAmenities.push(item.attributes.name);
    }
  });

  return {
    data: data.map(cleanPropertyObjects),
    amenities: includedAmenities.sort()
  };

  function cleanPropertyObjects(rawObj) {
    const tagIds = rawObj.relationships.tags.data.map(tag => tag.id);
    // Map amenities to their keys to create array ['wifi', 'lcd screen']
    // Filter out paid amenities
    const amenityIds = rawObj.relationships.amenities.data.map((item) => {
      return amenities[item.id];
    }).filter((amenity) => amenity);

    return {
      name: rawObj.attributes.name,
      id: rawObj.id,
      slug: rawObj.attributes.slug,
      city: rawObj.attributes.city,
      display_address: rawObj.attributes.display_address,
      image_url: rawObj.attributes.image_url,
      starting_at: rawObj.attributes.starting_at,
      min_duration: rawObj.attributes.min_duration,
      max_capacity: rawObj.attributes.max_capacity,
      tags: includedTags.filter(tag => tagIds.includes(tag.id)),
      amenities: amenityIds
    };
  };
};

function arrayBuilder(included, type) {
  if ( included ) return included.filter(obj => obj.type === type);
  return [];
};