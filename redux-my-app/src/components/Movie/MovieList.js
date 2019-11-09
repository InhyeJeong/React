import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchMoviesActionCreator } from '../../modules/action'
import axios from 'axios'
class MovieList extends Component {

  componentDidMount() {
    const query = `{movies {title, cover}}`
    axios.get(`http://localhost:3000/q?query=${query}`).then((response) => {
      this.props.fetchMovieList(response)
    })
  }

  render() {
    const {
      children,
      movies = [],
      params = {}
    } = this.props
    return (
      <div>
        <div>
          {movies.map((movie, index) => (
            <Link
              key={index}
              to={`/movies/${index + 1}`}>
              <img src={movie.cover} style={{'height': '500px'}} />
            </Link>
          ))}
        </div>
        {children}
      </div>
    )
  }
}
export default connect(({ fetchMoviesReducer }) => (
  {
    movies: fetchMoviesReducer.all
  }
  ), {fetchMovieList: fetchMoviesActionCreator})(MovieList)