// Movie Info Bar - shows the movie info / statistics / favorites button on a single movie page

import React from 'react';
import { calcTime, convertMoney } from '../../helpers.js';
import FavouriteButton from './FavouriteButton';

const MovieInfoBar = ({ movie, checkFav }) => {

  return (
    <div className="movieinfobar">
      <div className="movieinfobar-content">

        <div className="movieinfobar-content-col">
          <span className="movieinfobar-info"><b>Runtime:</b> {calcTime(movie.runtime)}</span>
          <span className="movieinfobar-info"><b>Budget:</b> {convertMoney(movie.budget)}</span>
          <span className="movieinfobar-info"><b>Revenue:</b> {convertMoney(movie.revenue)}</span>
        </div>

        <div className="movieinfobar-content-col">
          <div className="movieinfobar-favourites">
            <FavouriteButton movie={movie} checkFav={checkFav} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default MovieInfoBar;