// Actors Page - Shows a list of all actors and their roles who participated in the movie

import React from 'react';
import { IMAGE_BASE_URL } from '../../config';

const Actor = (props) => {

    // Determine size of actor's image on a single movie page
    const POSTER_SIZE = "w154";

    return (
        <div className="actor">
            <img src={props.actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}/${props.actor.profile_path}` : './images/no_image.jpg'} alt="Actor Headshot" />
            <span className="actor-name">{props.actor.name}</span>
            <span className="actor-character">{props.actor.character}</span>
        </div>
    )
}

export default Actor;