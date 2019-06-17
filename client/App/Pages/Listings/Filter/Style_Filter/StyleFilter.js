import React from 'react';
import styles from './StyleFilter.css';

const StyleFilter = ({ styles, activeStyles }) => {
  return (
    <div>
      <h3>STYLE</h3>
      {styles.map( style =>
        <div key={style} className="checkbox">
          <label>
            <input type="checkbox"/>
            {style}
          </label>
        </div> 

      )}
    </div>
  );
};

export default StyleFilter;