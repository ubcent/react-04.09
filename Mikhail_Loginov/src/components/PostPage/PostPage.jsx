import './PostPage.styl';

import React, {PureComponent} from 'react';
import {Container, Input, Button} from 'reactstrap';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class PostPage extends PureComponent {
  static propTypes = {
    post: propTypes.object,
    author: propTypes.object,
    postComments: propTypes.array,
    authors: propTypes.array,
    handleSubmitButton: propTypes.func,
    handleCommentInputChange: propTypes.func,
    handleDeleteComment: propTypes.func,
  }

  state = {
    commentText: '',
  }

  renderPost(post, author) {
    return (
      <div className="post">
        <h1 className="post__title">{post.title}</h1>
        <h3 className="post__subtitle">{post.shortDescription}</h3>
        <p className="post__creds">Posted by {author.firstName} {author.lastName} on {post.date}</p>
        <p className="post__text">{post.text}</p>
      </div>
    )
  }

  renderComments(postComments) {
    let renderedComments = '';
    if (postComments.length !== 0) {
      renderedComments =
        postComments.map((comment, index) => {
          let commentAuthor = this.props.authors[comment.authorId-1];
          return (
          <div className="comment" key={index}>
            <div className="comment__menu">
              <button name={comment.id} onClick={this.props.handleDeleteComment} className="comment__delete">X</button>
              <button className="comment__edit">
                <FontAwesomeIcon icon="edit" />
              </button>
            </div>
            <div className="comment__text">{comment.text}</div>
            <div className="comment__author">Written by {commentAuthor.firstName} {commentAuthor.lastName}</div>
          </div>)
        });
    }
    return renderedComments;
  }

  render() {
    let renderedPost = this.renderPost(this.props.post, this.props.author);
    let renderedComments = this.renderComments(this.props.postComments);
    
    return (
      <main>
        <Container>
          {renderedPost}
          <div className="post__comments">
            <h4>Comments</h4>
            <form>
              <Input name="commentText" onChange={this.props.handleCommentInputChange} type="textarea"/>
              <Button onClick={this.props.handleSubmitButton}>Submit</Button>
            </form>
            {renderedComments}
          </div>
        </Container>
      </main>
    );
  }
}

