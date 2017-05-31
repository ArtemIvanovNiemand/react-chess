import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class Posts extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired
  };
  generatePosts(posts){
    return(
      <ul>
        {posts.map((post, i) => <li key={i}>{post.title}</li>)}
      </ul>
    );
  }

  render() {
    const { posts } = this.props;
    const lines = this.generatePosts(posts);

    return lines;
  }
}
