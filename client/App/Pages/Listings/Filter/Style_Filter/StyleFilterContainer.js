import { connect } from 'react-redux';
import { styleFilterClick, toggleFilterDrawer } from './StyleFilterActions';
import StyleFilter from './StyleFilter';

const mapStateToProps = ( state ) => {
  return {
    styles: ['Glam', 'Lux', 'Modern', 'Artsy', 'Rustic', 'Upscale'], // populated by available properties
    activeStyles: [] // currently checked styles
  };
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    // filterClick: (style) => dispatch(styleFilterClick(style)),
    // toggleDrawer: () => dispatch(toggleFilterDrawer())
  };
};

const StyleFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StyleFilter);

export default StyleFilterContainer;