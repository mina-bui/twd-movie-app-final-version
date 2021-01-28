// Six Column Grid - create a six column grid (desktop) of movies on the homepage
//                 - 6 on desktop, 4 on tablet, 3 on large phone, 2 on small phone

import React from 'react';
import PropTypes from 'prop-types';
//import MovieThumb from './MovieThumb';
import MovieThumb from './MovieThumb-MW';


// Create a functional component that will recieve props and that will return a div with the six col grid
const SixColGrid = ({ movies, header, loading }) => {


  const renderElements = (movies) => {

    return movies.map((movie, i) => {

      return (
        <div className="grid-element">
          <MovieThumb key={i} movie={movie} />
        </div>
      )
    })

  }

  <div className="grid-element"></div>

  return (
    <div className="grid">

      {header && !loading ? <h1>{header}</h1> : null}
      <div className="grid-content">

        {renderElements(movies)}
      </div>
    </div>

  )
}

SixColGrid.propTypes = {
  header: PropTypes.string,
  loading: PropTypes.bool
}

export default SixColGrid;