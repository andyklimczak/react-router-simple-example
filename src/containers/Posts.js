import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ListItemForm from '../components/ListItemForm';
import { addItem, addFlashMessage, getPosts } from '../actions/index';
import { Link } from 'react-router';

import '../assets/css/ListPage.css';

class Posts extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getPosts());
  }
  render() {
    const { posts } = this.props;
    return (
      <div className="list-group">
        {posts.map(post => {
          return <Link to={`/posts/${post.id}`} key={post.id} className="list-group-item list-group-item-action">{post.title}</Link>
        })}
      </div>
    );
  }
}

Posts.propTypes = {
  dispatch: PropTypes.func.isRequired,
  posts: PropTypes.array
};

function mapStateToProps(state) {
  return { posts: state.posts.posts };
}

export default connect(mapStateToProps)(Posts);
