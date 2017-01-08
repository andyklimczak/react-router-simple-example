import { POST__GET } from '../actions/ActionTypes';


const initialState = {
  post: {}
};

export default function list(state = initialState, action) {
  switch (action.type) {
    case POST__GET:
      return Object.assign({}, state, {
        post: action.post
      });
    default:
      return state;
  }
}
