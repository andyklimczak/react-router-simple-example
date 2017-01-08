import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import flashMessages from './flashMessages';
import list from './list';
import posts from './posts';

const rootReducer = combineReducers({
  flashMessages,
  list,
  routing,
  posts
});

export default rootReducer;
