// Search Bar - shows the search bar below the header

import { useState } from 'react';
import searchIcon from './images/search_icon.png';
import { API_URL, API_KEY } from '../../config';

function SearchBar({ handleSetMovies }) {

    const [query, setQuery] = useState('');

    let timeout = null;

    // Do search method with arrow function
    const doSearch = (event) => {
        // Sets the value from the input key 
        setQuery(event.target.value);

        // Waits for user to type something
     
        let endpoint;

        clearTimeout(timeout);
        // Clear old timeout to set a new one
        timeout = setTimeout(() => {
          
            // Check to see if theres anything in the search term
            if (query === '') {
                // If not, populate the the movie with popular movies
                endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
            } else {
                // If so, show the searched movies
                endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}`;
            }
            // Use fetchItem to grab the movies

            const fetchItems = async () => {
                const res = await fetch(endpoint);
                const data = res.json();
                const movies = data.results;
                handleSetMovies(movies);
            }
            fetchItems();

        }, 500)
    }

    return (
        <div className="searchbar">
            <div className="searchbar-content">
                <img src={searchIcon} alt="Search Icon" />
                <input
                    type="text"
                    className="searchbar-input"
                    placeholder="Search"
                    // Call back function 
                    onChange={doSearch}
            
                />
            </div>
        </div>
    )
}

export default SearchBar;