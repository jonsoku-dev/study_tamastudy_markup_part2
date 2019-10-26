import React, { Component } from 'react';
import PostSinglePresenter from './PostSinglePresenter';

export default class PostSingleContainer extends Component {
  render() {
    return <PostSinglePresenter param={this.props.match.params.postId} />;
  }
}
