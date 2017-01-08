import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './containers/App';
import Posts from './containers/Posts';
import Post from './containers/Post';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Posts} />
    <Route path='/posts/:postId' component={Post} />
  </Route>
);
