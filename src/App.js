import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Movie from './Movie';
import movies from './moviesData';

class App extends Component {
  state = {
    movies: movies
  }
  deleteMovie = (id)=> {
    let moviesFiltered = this.state.movies.filter((movie)=> movie.id !== id)
    this.setState({
      movies: moviesFiltered
    })
  }
  deleteMovies = ()=>{
    this.setState({
      movies: []
    })
  }
  render() {
    const deleteButton = (
      <button onClick={this.deleteMovies}>Delete All Movies</button>
    )
    return (
      <div>
        <Header/> 
        {this.state.movies.length == 0 ? <p>No Movies</p> : deleteButton}
        {this.state.movies.map(movie => <Movie key={movie.id} id={movie.id} deleteMovie={this.deleteMovie} director={movie.director} cast={movie.cast} title={movie.title}/>)}
      </div>
    )
  }
}

export default App;
