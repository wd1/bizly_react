import React, { Component } from 'react';
import Slider from 'rc-slider';
import styles from './PriceFilter.css';

class PriceFilter extends Component {
  onAfterChange = (values) => {
    const { onAfterChange } = this.props;

    if (onAfterChange) {
      onAfterChange(values);
    }
  }

  onChange = (values) => {
    const { onChange } = this.props;

    if (onChange) {
      onChange(values);
    }
  }

  render() {
    const { min, max, range, selectedPriceRange } = this.props;
    const startRange = selectedPriceRange ? '$' + selectedPriceRange[0] : '$' + range[0] || min;
    const endRange = selectedPriceRange ? '$' + selectedPriceRange[1] : '$' + range[1] || max;

    return (
      <div>
        <h3>Price Range</h3>
        <div className={styles.prices}>
          <span>{startRange}</span>
          <span>-</span>
          <span>{endRange}</span>
        </div>
        <Slider 
          range={true} 
          step={25} 
          min={min} 
          max={max} 
          defaultValue={selectedPriceRange || [min, max]} 
          tipFormatter={null}
          onChange={this.onChange}
          onAfterChange={this.onAfterChange}
        />
      </div>
    );
  }
}

export default PriceFilter;