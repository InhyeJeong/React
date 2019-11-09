import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { fetchMovieActionCreator } from '../../modules/action'
import axios from 'axios'
class Movie extends Component {
  constructor (props) {
    super(props)
    this.state = {
      movie: [],
    }
  }
  componentDidMount() {
    this.fetchMovie(this.props.match.params.id)
  }

  componentDidUpdate(next) {
    if (this.props.match.params.id !== next.match.params.id) {
      this.fetchMovie(this.props.match.params.id)
    }
  }

  fetchMovie(id = this.props.match.params.id) {
    const query = `{movie(index:${id}) {title, cover, year, starring {name}}}`
    axios.get(`http://localhost:3000/q?query=${query}`).then((response) => {
      this.props.fetchMovie(response)
    })
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
            {movie.starring.map((actor = {}, index) => {
              return (
                <div key={index}>
                  {actor.name}
                </div>
              )
            })}
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