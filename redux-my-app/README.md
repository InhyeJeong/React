## react-redux repo


https://deminoth.github.io/redux/


### actions
* type const 정의
* 원하는 변경 return
> dispatch() 함수를 스토어에서 store.dispatch()로 바로 접근할 수 있지만, 여러분은 보통 react-redux의 connect()와 같은 헬퍼를 통해 접근할 것입니다. 여러 액션 생산자를 dispatch()에 바인드하기 위해 bindActionCreators()를 사용할수도 있습니다.


```javascript
/*
 * action types : 액션은 애플리케이션에서 스토어로 보내는 데이터 묶음입니다.
 */

export const FETCH_MOVIES = 'movies/FETCH_MOVIES'
export const FETCH_MOVIE = 'movies/FETCH_MOVIE'

/*
 * action creators : 액션 생산자는 액션을 만드는 함수입니다.
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

```

### reducers
* 여러개의 reducer를 combine해서 createStore의 파라미터로 넘기면 **하나의 store**가 생성된다.
* action의 type값에 따라
* **새로운 state**를 return

```javascript
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
```


### store

* Redux 애플리케이션에서 **단 하나의 스토어**만 가질 수 있음을 알아두는것이 중요합니다.
* 만약 데이터를 다루는 로직을 쪼개고 싶다면, 여러개의 스토어 대신 **리듀서 조합**을 사용할 수 있습니다.

```javasript
import { createStore } from 'redux';
import todoApp from './reducers';

let store = createStore(todoApp);
```

### how to use
* 컴포넌트에서 원하는 액션 호출
* 리듀서에서 호출된 1번 액션의 타입에 따른 새로운 state return
* state값이 변경됨에 따라 렌더 함수가 호출되거나 등등 원하는 조작가능
