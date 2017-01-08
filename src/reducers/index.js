import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import flashMessages from './flashMessages';
import list from './list';
import posts from './posts';
import post from './post';

const rootReducer = combineReducers({
  flashMessages,
  list,
  routing,
  posts,
  post,
});

export default rootReducer;
