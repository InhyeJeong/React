import React from 'react'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'
import App from './App';
import MovieList from './components/Movie/MovieList'
import Movie from './components/Movie/Movie'

export default (
  <BrowserRouter>
    <>
    <Route path="/" component={App} >
      {/* <IndexRoute component={Movies} /> */}
      <Route path="/movies" component={MovieList}>
        
      </Route>
      <Route path="/movies/:id" component={Movie} />
    </Route>
      
    </>
  </BrowserRouter>
)