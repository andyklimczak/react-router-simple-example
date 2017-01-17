import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getPost, setFetching } from '../actions/index';

class Post extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    const { postId } = this.props.params;
    dispatch(setFetching(true));
    console.log('will mount');
    dispatch(getPost(postId));
  }
  render() {
    const { post, needFetch } = this.props;
    if(needFetch) {
      return (
        <div>
          <h4>Fetching</h4>
        </div>
      );
    } else {
      return (
        <div>
          <h2>{ post.title }</h2>
          <p>
            { post.body }
          </p>
          <p>
            Written by: { post.userId }
          </p>
        </div>
      );
    }
  }
}

Post.propTypes = {
  dispatch: PropTypes.func.isRequired,
  post: PropTypes.object,
  params: PropTypes.object,
  postId: PropTypes.number,
};

function mapStateToProps(state) {
  return {
    post: state.post.post,
    needFetch: state.fetch.needFetching,
  };
}

export default connect(mapStateToProps)(Post);
