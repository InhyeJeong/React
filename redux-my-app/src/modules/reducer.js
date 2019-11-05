import { combineReducers } from 'redux';
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions';
const { SHOW_ALL } = VisibilityFilters;

//  reducer에서는 state 값을 변경하지 않고 복사해서 새로운 값을 반환한다.
//  아래와 같이 기능별로 reducer를 분리할 수 있다. visibilityFilter, todos
function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
  case SET_VISIBILITY_FILTER:
    return action.filter;
  default:
    return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, {
        text: action.text,
        completed: false
      }];
    case COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: true
        }),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
}

//  reducer를 하나로 combine한다.
const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;
