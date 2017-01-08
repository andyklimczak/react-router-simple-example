import { POSTS__GET } from '../actions/ActionTypes';

const initialState = {
  posts: []
};

export default function list(state = initialState, action) {
  switch (action.type) {
    case POSTS__GET:
      return Object.assign({}, state, {
        posts: action.posts
      });
    default:
      return state;
  }
}
