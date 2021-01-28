// Six Column Grid - create a six column grid (desktop) of movies on the homepage
//                 - 6 on desktop, 4 on tablet, 3 on large phone, 2 on small phone

import React from 'react';
import PropTypes from 'prop-types';

// Create a functional component that will recieve props and that will return a div with the six col grid
const SixColGrid = (props) => {

  // Const to send in thumbnail 
  const renderElements = () => {
    // Grabs children from predefined props taht is sent in from home 

    const gridElements = props.children.map((element, i) => {
      return (
        // looping thru children  
        <div key={i} className="grid-element">

          {element}
        </div>
      )
    })
    return gridElements;
  }

  return (
    <div className="grid">

      {props.header && !props.loading ? <h1>{props.header}</h1> : null}
      <div className="grid-content">

        {renderElements()}
      </div>
    </div>
  )
}

SixColGrid.propTypes = {
  header: PropTypes.string,
  loading: PropTypes.bool
}

export default SixColGrid;