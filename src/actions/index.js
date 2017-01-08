import * as types from './ActionTypes';

export function getPosts() {
  const { API_URL } = process.env;
  return dispatch => {
    setTimeout(() => {
      fetch(`${API_URL}/posts`)
      .then((res) => {
        return res.json();
      }).then(json => {
        dispatch(getPostsDone(json));
      });
    }, 5000);
  };
}

export function getPostsDone(posts) {
  return { type: types.POSTS__GET, posts };
}

export function getPost(postId) {
  const { API_URL } = process.env;
  return dispatch => {
    setTimeout(() => {
      fetch(`${API_URL}/posts/${postId}`)
      .then((res) => {
        return res.json();
      }).then(json => {
        dispatch(getPostDone(json));
      });
    }, 5000);
  };
}

export function getPostDone(post) {
  return { type: types.POST__GET, post };
}
