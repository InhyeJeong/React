import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchMoviesActionCreator } from '../../modules/action'
import axios from 'axios'
class MovieList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      movieList: [],
    }
  }
  componentDidMount() {
    const query = `{movies {title, cover}}`
    axios.get(`http://localhost:3000/q?query=${query}`).then((response) => {
      var res = this.props.fetchMovieList(response)
      this.setState({
        movieList: res.movies
      }, () => {
        console.log('fetch success ->', this.state.movieList)
      })
    })
  }

  render() {
    return (
      <div style={{'display': 'flex', 'flexDirection': 'column'}}>
        {this.state.movieList.map((movie, index) => (
          <Link
            key={index}
            to={`/movies/${index + 1}`}>
            <img src={movie.cover} style={{'maxHeight': '500px'}} />
            <h1>
              {movie.title}
            </h1>
          </Link>
        ))}
      </div>
    )
  }
}
export default connect(({ fetchMoviesReducer }) => (
  {
    movies: fetchMoviesReducer.all
  }
  ), {fetchMovieList: fetchMoviesActionCreator})(MovieList)