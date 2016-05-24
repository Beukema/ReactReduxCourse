import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {

  componentWillMount(){
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        List of blog posts
        <Link to={`/posts/new`}>New Post</Link>
      </div>
    );
  }
}

export default connect(null, { fetchPosts })(PostsIndex);
