import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import SearchBar from '../elements/SearchBar';
import SixColGrid from '../elements/SixColGrid-MW';
import LoadMoreBtn from '../elements/LoadMoreBtn';
import Spinner from '../elements/Spinner';


class Home extends Component {
    state = {
        movies: [], 
        loading: false,
        currentPage: 0,
        totalPages: 0,
        searchTerm: ''
    }


    /*
    ==========================================================================================================================================
    Function to Mount/Call API
    */
    // check if component has mounted
    componentDidMount() {
        this.setState({ loading: true });
        // Specify API URL (Start by calling the popular movies first)
        // URL first, then API key
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        // send endpoint to the method
        this.fetchItems(endpoint);
    }

    /*
    ==========================================================================================================================================
    Function for Search 
    */
    searchItems = (searchTerm) => {
        let endpoint = '';
        this.setState({
            // clear movies and only show what is searched
            movies: [],
            // show loading screen on bottom
            loading: true,
            // sets the searchterm INTO the state
            searchTerm
        })
        // check to see if theres anything in the search term
        if (searchTerm === '') {
            // if not, populate the the movie with popular movies
            endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        } else {
            // if so, show the searched movies
            endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
        }
        // use fetchITem to grab the movies
        this.fetchItems(endpoint);
    }

    /*
    ==========================================================================================================================================
    Function for Loading more Movies 
    */
    loadMoreItems = () => {
        let endpoint = '';
        this.setState({ loading: true });
        if (this.state.searchTerm === '') {
            // will load more popular movies (on home page)
            endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currentPage + 1}`;
        } else {
            // will load more movies on the searched page
            endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${this.state.searchTerm}&page=${this.state.currentPage + 1}`;
        }
        this.fetchItems(endpoint);
    }

    /*
    ==========================================================================================================================================
    Function for Fetching Data from API and distributing
    */
    fetchItems = (endpoint) => {
        fetch(endpoint)
            // (then, waits for the result) use json to convert results from the raw data
            .then(result => result.json())
            .then(result => {
                // get data into state
                this.setState({
                    // load new movies while appeneding the movies to the older ones
                    movies: [...this.state.movies, ...result.results],
                    loading: false,
                    currentPage: result.page,
                    totalPages: result.total_pages
                })
            })
            .catch(error => console.error('Error:', error))
    }

    /*
    ==========================================================================================================================================
    Render Function
    */
    render() {


        return (
            <div className="home">

                <div>
                    <SearchBar callback={this.searchItems} />
                </div>
                <div className="header-form-select-wrapper">
                    <div className="header-form-select">
                        <div className="form-popular-active">
                            <Link>Popular</Link>
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

                    {this.state.movies !== null && <SixColGrid movies={this.state.movies} />}


                    {this.state.loading ? <Spinner /> : null}

                    {(this.state.currentPage <= this.state.totalPages && !this.state.loading) ?
                        // Ternary to check and see if page is in loading state or not
                        <LoadMoreBtn text="Load More" onClick={this.loadMoreItems} /> : null}
                </div>
            </div>
        )
    }
}

export default Home;
