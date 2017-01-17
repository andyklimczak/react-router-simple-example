import { FETCHING__SET } from '../actions/ActionTypes';

const initialState = {
  needFetching: true
};

export default function list(state = initialState, action) {
  switch (action.type) {
    case FETCHING__SET:
      return Object.assign({}, state, {
        needFetching: action.needFetching,
      });
    default:
      return state;
  }
}
