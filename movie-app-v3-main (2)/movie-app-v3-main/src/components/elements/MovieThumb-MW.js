// Movie Thumb - Shows each movie on the homepage

import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';

const MovieThumb = ({ movie }) => {
    return (
        <div className="moviethumb">
            <div className="movie">

                <Link to={{
                    // Grabs the movie id so that it can be grabbed with link to show on URL
                    pathname: `/single-movie/${movie.id}`,
                    // Sends in the movie name to be shown in header
                    movieName: `${movie.name}`
                }}>

                    {movie.poster_path === null ? <img src="./images/no_image.jpg" /> : <img src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`} alt={movie.title} />}
                    <div className="moviethumb-details">
                        <div className="moviethumb-title">{movie.original_title}</div>
                        <div className="moviethumb-overview">{movie.overview}</div>
                        <div className="moviethumb-release">[{movie.release_date}]</div>

                    </div>
                    <div className="moviethumb-moreinfo-rating">
                        <div className="moviethumb-moreinfo">More Info</div>
                        <div className="moviethumb-rating">{movie.vote_average}</div>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default MovieThumb;