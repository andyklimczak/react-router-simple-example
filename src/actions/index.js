import * as types from './ActionTypes';


export function addItem(item) {
  return dispatch => {
    dispatch(addFlashMessage(`Successfully added "${item}"!`, 'notification'));
    dispatch(addItemSuccess(item));
  };
}

export function addItemSuccess(item) {
  return { type: types.ITEM__CREATE, item };
}

export function addFlashMessage(text, messageType = 'error') {
  return { type: types.FLASH_MESSAGE__CREATE, text, messageType };
}

export function dismissFlashMessage(stamp) {
  return dispatch => {
    // NOTE: Without this timeout, a bug occurs that causes one
    // or more closely-timed flash messages to get skipped over.
    setTimeout(() => {
      dispatch(deleteFlashMessage(stamp));
    }, 500);
  };
}

export function deleteFlashMessage(timestamp) {
  return { type: types.FLASH_MESSAGE__DELETE, timestamp };
}

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
