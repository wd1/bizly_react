import React, { Component } from 'react';
import { connect } from 'react-redux';
import PriceFilter from './Price_Filter/PriceFilter';
import AmenitiesFilter from './Amenities_Filter/AmenitiesFilter';
import styles from './Filter.css';

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      range: [0, 250],
      min: 0,
      max: 250
    };
  }

  onFilterByAmenities = (values) => {
    if (values.length === 0) {
      this.props.removeFilter('amenities', values);
      return;
    }

    this.props.addFilter('amenities', values);
  }

  onFilterByPrice = (values) => {
    const {min, max} = this.state;

    if (values[0] === min && values[1] === max) {
        this.props.removeFilter('price', values);
      return;
    }

    this.props.addFilter('price', values);
  }

  onPriceSliderChange = (values) => {
    this.setState({
      range: values
    });
  }

  render() {
    const { amenities, selectedAmenities, selectedPriceRange } = this.props;

    return (
      <div>
        <div className={styles.filter}>
          <PriceFilter 
            selectedPriceRange={selectedPriceRange}
            onChange={this.onPriceSliderChange} 
            onAfterChange={this.onFilterByPrice}
            {...this.state} />
        </div>
        <div className={styles.filter}>
          <AmenitiesFilter selectedAmenities={selectedAmenities} amenities={amenities} onChange={this.onFilterByAmenities} />
        </div> 
      </div>
    );
  }
};

const mapStateToProps = ( state ) => {
  return {
    properties: state.ListingsPage.properties,
    selectedPriceRange: state.ListingsPage.filters.price,
    selectedAmenities: state.ListingsPage.filters.amenities,
  };
};

export default connect(
  mapStateToProps,
  {}
)(Filter);