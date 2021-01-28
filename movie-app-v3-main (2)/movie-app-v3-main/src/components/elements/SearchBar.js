// Search Bar - shows the search bar below the header

import React, { Component } from 'react';

class SearchBar extends Component {
    state = {
        value: ''
    }

    timeout = null;

    // Do search method with arrow function
    doSearch = (event) => {
        // Sets the value from the input key 
        this.setState({ value: event.target.value })
        // Waits for user to type something
        clearTimeout(this.timeout);
        // Clear old timeout to set a new one
        this.timeout = setTimeout(() => {
            // Getting callback function from props, 
            this.props.callback(this.state.value);
        }, 500)
    }

    render() {
        return (
            <div className="searchbar">
                <div className="searchbar-content">
                    <img src="./images/search_icon.png" alt="Search Icon"></img>
                    <input
                        type="text"
                        className="searchbar-input"
                        placeholder="Search"
                        // Call back function 
                        onChange={this.doSearch}
                        // Grab value from state to place into input field
                        value={this.state.value}
                    />
                </div>
            </div>
        )
    }

}


export default SearchBar;