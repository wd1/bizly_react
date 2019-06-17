import React from 'react';
import styles from './InfoGrid.css';
import InfoTile from './InfoTile';

import spaceSrc from '../../../../assets/icon-spaces.png';
import bookingSrc from '../../../../assets/icon-booking.png';
import diningSrc from '../../../../assets/icon-diningexperience.png';


const infoTiles = [
  {
    icon: spaceSrc,
    bgImage: 'background img url here',
    title: 'Sophisticated Spaces',
    description: 'Find a meeting space to fit your small group under 40 people — from sleek boardrooms to flexible studios and stunning penthouse suites'
  },
  {
    icon: bookingSrc,
    bgImage: 'background img url here',
    title: 'Streamlined Booking',
    description: 'Browse, book and pay all in one place — on demand.  Hourly rates give you the flexibility to book only what you need.  Meetings in 30 days or less are our specialty.'
  },
  {
    icon: diningSrc,
    bgImage: 'background img url here',
    title: 'Distinctive Experiences',
    description: 'Modern hospitality, exceptional service and a la carte amenities make creating a memorable meeting experience simple and easy.'
  }
]

const InfoGrid = () => {
  return (
    <div className={styles.hidexs + " container"}>
      <div className="row">
        {infoTiles.map((tile, index) =>
          <InfoTile key={index} icon={tile.icon} image={tile.bgImage} title={tile.title} description={tile.description}/>
        )}
      </div>
    </div>
  );
};

export default InfoGrid;