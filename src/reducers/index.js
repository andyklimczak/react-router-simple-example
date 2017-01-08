import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import posts from './posts';
import post from './post';

const rootReducer = combineReducers({
  routing,
  posts,
  post,
});

export default rootReducer;
