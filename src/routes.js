import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './containers/App';
import About from './components/About';
import Posts from './containers/Posts';
import ListPage from './containers/ListPage';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Posts} />
    <Route path='/about' component={About} />
    <Route path='/list' component={ListPage} />
  </Route>
);
