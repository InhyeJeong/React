import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import moviesJson from './movies.json'
import {fetchMoviesActionCreator} from '../../modules/action'
import axios from 'axios'
class MovieList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      movieList: [],
    }
  }
  componentDidMount() {
    const query = `{
      movies(index:1) {
        title,
        cover
      }
    }`
    axios.get('http://localhost:3000/q?query={movie{title,cover}}').then((response) => {
      // response = this.props.fetchMovieList(response)
      console.log(response)
    })
    
    // var response = this.props.fetchMovieList(moviesJson)
    // this.setState({
    //   movieList: response.movies
    // }, () => {
    //   console.log('fetch success ->', this.state.movieList)
    // })
  }
  // Comment componentWillMount() and uncomment componentDidMount to use async fetch

  // componentDidMount() {
  //   fetch('./movies.json', {method: 'GET'})
  //     .then((response)=>{return response.json()})
  //     .then((movies)=>{
  //       this.props.fetchMovies(movies)
  //     })
  // }
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