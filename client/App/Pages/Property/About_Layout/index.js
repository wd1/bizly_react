import React, { PropTypes } from 'react';
import PropertyHero from '../Property_Hero/index';
import PropertyDescription from '../Property_Description/index';
import PropertySummary from '../Property_Summary/index';
import styles from './index.css';

const AboutLayout = ({activeLayout, toggle, property: {
  name,
  image,
  images,
  tags,
  fullAddress,
  coord,
  deckline,
  description,
  execSummary,
  freebies,
  policies
}}) => {
  return (
    <div style={ activeLayout ? {display: 'block'} : {display: 'none'} }>
      <PropertyHero name={name} image={image} images={images} tags={tags} address={fullAddress}/>
      <PropertyDescription deckline={deckline} description={description}/>
      <PropertySummary execSummary={execSummary} amenities={freebies} policies={policies} toggle={toggle}/>
    </div>
  );
};

export default AboutLayout;