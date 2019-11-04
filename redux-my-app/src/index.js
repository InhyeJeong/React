import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom'
//  Below is for redux
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './modules'
import route from './route.js'

ReactDOM.render(<Provider store={createStore(reducers)}>
{route}
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()