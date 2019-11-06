import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import moviesJson from './movies.json'
import { fetchMovieActionCreator } from '../../modules/action'
import { bindActionCreators } from 'redux';
class Movie extends Component {
  constructor (props) {
    super(props)
    this.state = {
      movie: [],
    }
  }
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id)
  }

  componentDidUpdate(next) {
    if (this.props.match.params.id !== next.match.params.id) {
      this.props.fetchMovie(this.props.match.params.id)
    }
  }

  render() {
    const {
      movie = {
        starring: []
      }
    } = this.props

    return (
      <div>
        <hr/>
        <h1>Movie Detail </h1>
        <img src={movie.cover} style={{'maxHeight': '500px'}} />
        <div>
          <h3>TITLE </h3>
          <div> {movie.title}</div>
          <h3>YEAR </h3>
          <div>{movie.year}</div>
          <h3>ACTOR </h3>
          <div>
            {movie.starring.map((actor = {}, index) => (
              <div
                key={index}>
                {actor.name}
              </div>
            ))}
          </div>
        </div>
        <Link
          to="/movies">
          <h1>BACK TO MAIN</h1>
        </Link>
      </div>
    )
  }
}

const getResult = (state) => {
  return {
    movie: state.fetchMoviesReducer.current
  }
}
export default connect(getResult, {fetchMovie: fetchMovieActionCreator})(Movie)