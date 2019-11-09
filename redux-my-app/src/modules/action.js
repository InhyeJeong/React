/*
 * action types
 */

export const FETCH_MOVIES = 'movies/FETCH_MOVIES'
export const FETCH_MOVIE = 'movies/FETCH_MOVIE'

/*
 * action creators
 */

export function fetchMoviesActionCreator(response) {
  return {
    type: FETCH_MOVIES,
    movies: response.data.data.movies
  };
}

export function fetchMovieActionCreator(response) {
  return {
    type: FETCH_MOVIE,
    movie: response.data.data.movie
  };
}

