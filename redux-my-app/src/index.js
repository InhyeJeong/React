import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import routes from './route'
import reducer from './modules/movies'
//  reducer를 가져와서 하나의 store생성
//  createStore : 두번째 인수로 초기 상태를 지정해줄수도 있습니다.
//                이는 서버에서 실행중인 Redux 애플리케이션의 상태와 일치하도록
//                클라이언트의 상태를 채워줄때 유용합니다.

const store = createStore(reducer)
let rootElement = document.getElementById('root');

// // 초기 상태를 기록합니다.
// console.log(store.getState());

// // 상태가 바뀔때마다 기록합니다.
// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// );

// // 액션들을 보냅니다.
// store.dispatch(addTodo('Learn about actions'));
// store.dispatch(addTodo('Learn about reducers'));
// store.dispatch(addTodo('Learn about store'));
// store.dispatch(completeTodo(0));
// store.dispatch(completeTodo(1));
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

// // 상태 변경을 더 이상 받아보지 않습니다.
// unsubscribe();

ReactDOM.render(
  <Provider store={store}>
    {/* <App/> */}
    {routes}
  </Provider>,
  rootElement
);
serviceWorker.unregister()