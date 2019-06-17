import React, { PropTypes, Component } from 'react';
import PropertyHero from '../Property_Hero/index';
import PropertyDescription from '../Property_Description/index';
import RoomsLayout from '../Rooms_Layout/index';
import PropertySummary from '../Property_Summary/index';
import CartContainer from '../../../Common/Cart/container';
import styles from './DesktopLayout.css';
import cartstyles from '../../../Common/Cart/Cart.css';

import { StickyContainer, Sticky } from 'react-sticky';

class DesktopLayout extends Component {
  constructor() {
    super();

    this.state = {
      absolute: true
    }
  }

  handleStickyStateChange = () => {
    this.setState({
      absolute: !this.state.absolute
    });
  }

  render() {
    const {
      absolute
    } = this.state;

    const {
      location,
      rooms,
      selectedRoom,
      selectedRoomSlug,
      openDetails,
      property } = this.props;

    const {
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
      policies } = property;

    return (
      <div className={styles.desktopwrap}>
        <PropertyHero name={name} image={image} images={images} tags={tags} address={fullAddress}/>
        <StickyContainer>
          <Sticky className={cartstyles.relative} stickyClassName={cartstyles.stickycart}  stickyStyle={{top: '80px'}} topOffset={-80} bottomOffset={300} onStickyStateChange={this.handleStickyStateChange}>
            <CartContainer absolute={true} location={location}/>
          </Sticky>
          <PropertyDescription deckline={deckline} description={description}/>
          <div className={styles.desktopcontainer}>
            <h2 classname={styles.heading}>Select Your Room</h2>
            <RoomsLayout rooms={rooms} selectedRoom={selectedRoom} selectedRoomSlug={selectedRoomSlug} selectRoom={openDetails}/>
            <PropertySummary name={name} execSummary={execSummary} amenities={freebies} policies={policies}/>
          </div>
        </StickyContainer>
      </div>
    );
  }
}

// TODO MIGI: add policies

export default DesktopLayout;