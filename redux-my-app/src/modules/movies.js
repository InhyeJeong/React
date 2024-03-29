import { combineReducers } from "redux";
//  action type
import {
  FETCH_MOVIES,
  FETCH_MOVIE,
} from './action';

const initialState = {
  movies: [],
  movie: [],
}
function fetchMoviesReducer(state = [], action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        all: action.movies
      };
      case FETCH_MOVIE:
        return {
          ...state,
          current: action.movie
        };
    default:
      return initialState;
  }
}

//  reducer를 하나로 combine한다.
const movieReducer = combineReducers({
  fetchMoviesReducer,
});

export default movieReducer;