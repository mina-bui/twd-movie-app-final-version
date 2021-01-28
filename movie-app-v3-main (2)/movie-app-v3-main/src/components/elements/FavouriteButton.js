// Favourite Button

import useGlobal from '../store/globalAppState';
import starEmpty from '../../images/favourite_icon.png';
import starFull from '../../images/favourite_icon_filled.png';

function FavouriteButton({ movie, checkFav }) {

    const [globalState, globalActions] = useGlobal();

    function isFav(id) {

        if (globalState.favs.length === 0) {
            return false;
        }
        // Check whether the movie is in the favs movie array
        return globalState.favs.some((movie) => movie.id === id);

    }

    return (
        <div className="favourite">
            {console.log(movie)}
            {!checkFav || isFav(movie.id) ?
                <button className="btn-favourite"
                    onMouseDown={(e) => { e.preventDefault(); }}
                    onClick={() => { globalActions.removeFav(movie.id); }}>
                    <img src={starFull} alt="Full Star" />
                </button> :
                <button className="btn-favourite"
                    onMouseDown={(e) => { e.preventDefault(); }}
                    onClick={() => { globalActions.addFav(movie); }}>
                    <img src={starEmpty} alt="Empty Star" />
                </button>
            }
        </div>
    );
}

FavouriteButton.defaultProps = {
    checkFav: true
}

export default FavouriteButton;