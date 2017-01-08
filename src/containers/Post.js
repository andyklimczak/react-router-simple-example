import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ListItemForm from '../components/ListItemForm';
import { addItem, addFlashMessage, getPost } from '../actions/index';
import { Link } from 'react-router';

import '../assets/css/ListPage.css';

class Post extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const { postId } = this.props.params;
    dispatch(getPost(postId));
  }
  componentWillReceiveProps(nextProps) {
    console.log('will receive props');
    const { postId } = this.props.params;
    if(nextProps.params.postId !== postId) {
      const { dispatch } = this.props;
      dispatch(getPost(postId));
    }
  }
  render() {
    const { post } = this.props;
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

Post.propTypes = {
  dispatch: PropTypes.func.isRequired,
  post: PropTypes.object,
  params: PropTypes.object,
  postId: PropTypes.number,
};

function mapStateToProps(state) {
  return { post: state.post.post };
}

export default connect(mapStateToProps)(Post);
