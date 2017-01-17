import * as types from './ActionTypes';

export function getPosts() {
  const { API_URL } = process.env;
  return dispatch => {
    fetch(`${API_URL}/posts`)
    .then((res) => {
      return res.json();
    }).then(json => {
      dispatch(getPostsDone(json));
      dispatch(setFetching(false));
    });
  };
}

export function getPostsDone(posts) {
  return { type: types.POSTS__GET, posts };
}

export function getPost(postId) {
  const { API_URL } = process.env;
  return dispatch => {
    fetch(`${API_URL}/posts/${postId}`)
    .then((res) => {
      return res.json();
    }).then(json => {
      dispatch(getPostDone(json));
      dispatch(setFetching(false));
    });
  };
}

export function getPostDone(post) {
  return { type: types.POST__GET, post };
}

export function setFetching(needFetch) {
  return { type: types.FETCHING__SET, needFetch };
}
