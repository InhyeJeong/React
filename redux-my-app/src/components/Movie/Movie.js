import React, { Component } from 'react'
const { connect } = 'react-redux'
import moviesJson from './../../../public/movies.json'
import fetchMoviesActionCreator from '../../modules/movies'

class Movies extends Component {
  // componentDidMount() {
  //   fetch('/src/movies.json', {method: 'GET'})
  //     .then((response)=>{return response.json()})
  //     .then((movies)=>{
  //       this.props.fetchMovies(movies)
  //     })
  // }
  render() {
    const {
      children,
      movies = [],
    } = this.props

    return (
      <div>
        <div>
          {movies.map((movie, index) => (
            <div key={index} style={{backgroundImage: `url(${movie.cover})`}} />
          ))}
        </div>
        children : {children}
      </div>
    )
  }
}

export default connect(({moviesJson}) => ({
  movies: moviesJson.all
}), {
  fetchMovies: fetchMoviesActionCreator
})(Movies)