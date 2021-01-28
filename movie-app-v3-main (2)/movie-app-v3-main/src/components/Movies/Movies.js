import React, { useState } from 'react';

function Movies({ movies }) {

    function makeMovies(movies) {

        // Function to Mount/Call API
        componentDidMount() {
            this.setState({ loading: true });
            const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
            // send endpoint to the method
            this.fetchItems(endpoint);
        }

        // Function for Fetching Data from API and distributing
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


    }

    return (

        <div className="home-grid">
            <SixColGrid
                loading={this.state.loading}
            >

                {this.state.movies.map((element, i) => {
                    // returns the movie thumb with it's props
                    return <MovieThumb
                        key={i}
                        // allows user to click on thumbnail
                        clickable={true}
                        //checks the image poster path. TERNARY, if there are no image, go to fall back image (no image.png)
                        image={element.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}` : './images/no_image.jpg'}
                        // start of using the link
                        movieId={element.id}
                        movieName={element.original_title}
                        movieRating={element.vote_average}
                        movieRelease={element.release_date}
                        movieOverview={element.overview}
                        movieGenre={element.genres_movie_list}
                    />
                })}
            </SixColGrid>

            {this.state.loading ? <Spinner /> : null}

            {(this.state.currentPage <= this.state.totalPages && !this.state.loading) ?
                // Ternary to check and see if page is in loading state or not
                <LoadMoreBtn text="Load More" onClick={this.loadMoreItems} /> : null}
        </div>

    );
};
export default Movies;