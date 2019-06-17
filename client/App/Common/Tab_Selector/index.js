import React, { PropTypes } from 'react';

// this component takes in:
//  the part of state that determines which tab to show
//  the action creator to toggle which tab to show
//  the tabnames to display
//  JOSEPH: I figured this would be useful to reuse so
//  I set this up to take in a stylesheet as a prop (styles)
//  It should give you a lot of flexibility with styling the
//  different tabs on the page

const TabSelector = ({ firstActive, toggleTab, tabNames , styles }) => {

  return (
    <div className={styles.tabwrap}>
      <div onClick={() => chooseTab(0)} className={styles.tab, ( firstActive ? styles.tabactive : styles.tab)}>
        <span>{tabNames[0]}</span>
      </div>
      <div onClick={() => chooseTab(1)} className={styles.tab, ( !firstActive ? styles.tabactive : styles.tab)}>
        <span>{tabNames[1]}</span>
      </div>
    </div>
  );

  function chooseTab(tab) {
    //console.log('hit that tab', firstActive, tab);
    if (firstActive) {
      if ( tab !== 0 ) return toggleTab();
    } else {
      if ( tab !== 1) return toggleTab();
    }
    return;
  };
};

export default TabSelector;