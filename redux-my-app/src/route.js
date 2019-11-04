import React from 'react'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'
import App from './App';
// const Movies = require('components/movies/movies.js')
// const Movie = require('components/movie/movie.js')

export default (
  <BrowserRouter>
    <div>
      <Route path="/" component={App} >
        {/* <IndexRoute component={Movies} />
        <Route path="movies" component={Movies}>
          <Route path=":id" component={Movie} />
        </Route> */}
      </Route>
    </div>
  </BrowserRouter>
)