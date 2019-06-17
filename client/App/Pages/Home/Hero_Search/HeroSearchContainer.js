import React, { PropTypes } from 'react';
import HeroSearch from './HeroSearch';

// TODO: handle form submit

const HeroSearchContainer = (props) => {
	return( <HeroSearch content={props.content}/> );
};

HeroSearchContainer.propTypes = {
	content: PropTypes.object
};

export default HeroSearchContainer;