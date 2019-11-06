/*
 * action types
 */

export const FETCH_MOVIES = 'movies/FETCH_MOVIES'
export const FETCH_MOVIE = 'movies/FETCH_MOVIE'

/*
 * action creators
 */

export function fetchMoviesActionCreator(movies) {
  return {
    type: FETCH_MOVIES,
    movies
  };
}

export function fetchMovieActionCreator(index) {
  return {
    type: FETCH_MOVIE,
    index
  };
}

