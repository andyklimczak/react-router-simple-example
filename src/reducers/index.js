import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import posts from './posts';
import post from './post';
import fetch from './fetch';

const rootReducer = combineReducers({
  routing,
  posts,
  post,
  fetch,
});

export default rootReducer;
