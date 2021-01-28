// Favourites

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useGlobal from '../store/globalAppState';
import SixColGrid from './SixColGrid-MW';

const Favourites = () => {

  const [globalState, globalActions] = useGlobal();

  const [ready, setReady] = useState(false);

  useEffect(() => {
    globalActions.setFavs();
    setReady(true);
  }, [globalActions]);

  return (
    <section class="favourites-section">

      <Link to={'/'} className="go-back">&#5176; Back</Link>

      <h2>Favourite Movies</h2>

      {globalState.favs.length === 0 ?
        <div className="fave-movies-text">
          <div className="favourite-tutorial-icons">
            <img src="./images/add icon.png" alt="Add Icon" className="favourite_icon"></img>
            <img src="./images/arrow_icon.png" alt="Arrow Icon" className="favourite_icon"></img>
            <img src="./images/favourite_icon.png" alt="Favourite Icon" className="favourite_icon"></img>
          </div>
          <p>Uh-oh, looks like you haven't chosen any movies yet!</p>
          <p>Feel free to return back to the home page and explore more movies!</p>
          <p>To add a favourite movie on the home page, you can click on the <img src="./images/favourite_icon.png" alt="Favourite Icon" className="favourite_icon"></img> while hovering or by clicking on the movie poster.</p>
          <p>You can also find the <img src="./images/favourite_icon.png" alt="Favourite Icon" className="favourite_icon"></img> when you click on an individual movie to learn more or watch a trailer.</p>
        </div>
        :
        (ready &&
          <div className="home-grid">
            <SixColGrid movies={globalState.favs} />
          </div>
        )
      }

    </section>

  );
};

export default Favourites;
