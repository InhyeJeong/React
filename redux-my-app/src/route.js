import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'
import App from './App';
import MovieList from './components/Movie/MovieList'
import Movie from './components/Movie/Movie'

export default (
  <BrowserRouter>
    <Route exact={true} path="/movies" component={MovieList} />
    <Switch>
      <Route path="/movies/:id" component={Movie} />
    </Switch>
  </BrowserRouter>
)