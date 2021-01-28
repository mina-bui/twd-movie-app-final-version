// Movie Thumb - shows each movie on the homepage

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieThumb = ({ clickable, image, movieId, movieName, movieOverview, movieRelease, movieRating }) => {
    return (
        <div className="moviethumb">
            <div className="movie">
                {clickable ?
                    // ^ Asks if clickable/ then links to pathname that will show up into URL
                    // POSSIBLY CHANGE THIS TO LINK THE THUMBNAIL CLICK TO A NEW PAGE!!!
                    <Link to={{
                        // Grabs the movie id so that it can be grabbed with link to show on URL
                        pathname: `/single-movie/${movieId}`,
                        // Sends in the movie name to be shwon in header
                        movieName: `${movieName}`
                    }}>

                        <img src={image} alt="Movie Poster" />
                        <div className="moviethumb-details">
                            <div className="moviethumb-title">{movieName}</div>
                            <div className="moviethumb-overview">{movieOverview}</div>
                            <div className="moviethumb-release">[{movieRelease}]</div>
                        </div>
                        <div className="moviethumb-moreinfo-rating">
                            <div className="moviethumb-moreinfo">More Info</div>
                            <div className="moviethumb-rating">{movieRating}</div>
                        </div>
                    </Link>
                    :
                    <img src={image} alt="Movie Poster" />
                }
            </div>
        </div>
    )
}

MovieThumb.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    movieName: PropTypes.string
}

export default MovieThumb;