import React, { Component } from 'react';
import { API_URL, API_KEY } from '../../config';
import Navigation from '../elements/Navigation';
import MovieInfo from '../elements/MovieInfo';
import MovieInfoBar from '../elements/MovieInfoBar';
import SixColGrid from '../elements/SixColGrid';
import Actor from '../elements/Actor';
import Spinner from '../elements/Spinner';


class Movie extends Component {
    state = {
        movie: null,
        actors: null,
        directors: [],
        loading: false
    }

    // lifecyle method 
    componentDidMount() {
        if (localStorage.getItem(`${this.props.match.params.movieId}`)) {
            const state = JSON.parse(localStorage.getItem(`${this.props.match.params.movieId}`));
            this.setState({ ...state });
        } else {
            //
            this.setState({ loading: true })
            // First fetch the movie...
            // fetches the movie variable that is created 
            const endpoint = `${API_URL}movie/${this.props.match.params.movieId}?api_key=${API_KEY}&language=en-US`;
            // it then fetches the items to endpoint
            this.fetchItems(endpoint);
        }
    }
    // method for fetch items with uses endpoint as the parameter
    fetchItems = (endpoint) => {
        fetch(endpoint)
            // get results from^ fetch endpoint, so convert results using json
            .then(result => result.json())
            .then(result => {
                // does a check to make sure that if the API doesnt return anything  
                if (result.status_code) {
                    this.setState({ loading: false });
                    // means nothing is loading...^^^
                } else {
                    // fill the movie state WITH the reuslt FOR the movie
                    this.setState({ movie: result }, () => {
                        // ... then fetch actors in the setState callback function
                        const endpoint = `${API_URL}movie/${this.props.match.params.movieId}/credits?api_key=${API_KEY}`;
                        // ^ new endpoint
                        fetch(endpoint)
                            .then(result => result.json())
                            .then(result => {
                                // used to fetch the directors 
                                // the above code already found the results, 
                                // now we much FILTER to get only the director data info (crew/jobs are predefined properties formt he API)
                                const directors = result.crew.filter((member) => member.job === "Director");
                                
                                // set the state again!
                                this.setState({
                                    actors: result.cast,
                                    directors,
                                    loading: false
                                }, () => {
                                    localStorage.setItem(`${this.props.match.params.movieId}`, JSON.stringify(this.state));
                                })
                            })
                    })
                }
            })
            // catches to see if any errors present.
            .catch(error => console.error('Error:', error))
    }
    render() {
        return (
            <div className="movie">
                {this.state.movie ?
                    <div>
                        <Navigation 
                            movie={this.props.location.movieName} 
                        />
                        <MovieInfo 
                            movie={this.state.movie} 
                            directors={this.state.directors} 
                        />
                        <MovieInfoBar 
                            movie = {this.state.movie}
                           
                        />
                    </div>
                : null}
                {this.state.actors ?
                    <div className="movie-grid">
                        <SixColGrid header={'Actors'}>
                            {this.state.actors.map((element, i) => {
                                return <Actor key={i} actor={element} />
                            })}
                        </SixColGrid>
                    </div>
                : null}

                {!this.state.actors && !this.state.loading ? <h1>Sorry, no movie was found.</h1> : null}
                {this.state.loading ? <Spinner /> : null}
            </div>
        )

    }
}


export default Movie;