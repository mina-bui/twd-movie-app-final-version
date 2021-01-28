import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import SixColGrid from '../elements/SixColGrid-MW';
import SearchBar from '../elements/SearchBar-MW';

function Home() {

    const [movies, setMovies] = useState(null);

    useEffect(() => {

        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

        const getMovies = async () => {
            const res = await fetch(endpoint);
            const data = await res.json();
            console.log(data);
            setMovies(data.results);
        }

        getMovies();

    }, []);


    const handleSetMovies = (movies) => {
        console.log(movies);
        //setMovies(movies);
    }

    return (
        <div className="home">

            <div>
                <SearchBar handleSetMovies={handleSetMovies} />
            </div>
            <div className="header-form-select-wrapper">
                <div className="header-form-select">
                    <div className="form-popular-active">
                        <Link to="/">Popular</Link>
                    </div>

                    <div className="vertical-form"></div>

                    <div className="form-top-rated">
                        <Link to="/toprated">Top Rated</Link>
                    </div>

                    <div className="vertical-form"></div>

                    <div className="form-upcoming">
                        <Link to="/upcoming">Upcoming</Link>
                    </div>

                    <div className="vertical-form"></div>

                    <div className="form-now-playing">
                        <Link to="/nowplaying">Now Playing</Link>
                    </div>
                </div>
            </div>

            <div className="home-grid">

                {movies !== null && <SixColGrid movies={movies} />}

                <p>HOME PAGE!!!</p>

                {/*this.state.loading ? <Spinner /> : null */}

                {/*(this.state.currentPage <= this.state.totalPages && !this.state.loading) ?
                    // Ternary to check and see if page is in loading state or not
                <LoadMoreBtn text="Load More" onClick={this.loadMoreItems} /> : null */}
            </div>
        </div>
    )


}

export default Home;
