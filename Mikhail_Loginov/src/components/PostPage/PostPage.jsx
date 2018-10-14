import './PostPage.styl';

import React, { PureComponent } from 'react';
import { Container, Input, Button } from 'reactstrap';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';

import getItemById from '../../utils';

export default class PostPage extends PureComponent {
  static propTypes = {
    commentText: propTypes.string,
    editableCommentId: propTypes.string,
    editableCommentInputText: propTypes.string,
    post: propTypes.object,
    author: propTypes.object,
    postComments: propTypes.array,
    authors: propTypes.array,
    handleSubmitButton: propTypes.func,
    handleSaveButton: propTypes.func,
    handleCommentInputChange: propTypes.func,
    handleEditComment: propTypes.func,
    handleEditCommentInput: propTypes.func.isRequired,
    handleCancelButton: propTypes.func.isRequired,
    handleDeleteComment: propTypes.func,
  }

  renderPost(post, author) {
    return (
      <div className="post">
        <h1 className="post__title">{post.title}</h1>
        <h3 className="post__subtitle">{post.shortDescription}</h3>
        <p className="post__creds">Posted by {author.firstName} {author.lastName} on {moment(post.date).format('MMMM Do YYYY')}</p>
        <p className="post__text">{post.text}</p>
      </div>
    )
  }

  renderComments(postComments) {
    let renderedComments = '';
    if (postComments.length !== 0) {
      renderedComments =
        postComments.map((comment, index) => {
          const commentAuthor = getItemById(this.props.authors, comment.authorId);
          if (this.props.editableCommentId === comment._id) {
            return (
              <div className="comment comment-editable" key={index}>
                <Input type="textarea" className="comment__text-input" value={this.props.editableCommentInputText}
                  onChange={this.props.handleEditCommentInput}/>
                <div className="comment__edit-buttons">
                  <Button color="secondary" onClick={this.props.handleCancelButton}>Cancel</Button>
                  <Button name={comment._id} color="primary" onClick={this.props.handleSaveButton}>Save</Button>
                </div>
              </div>)
          } else {
            return (
              <div className="comment" key={index}>
                <div className="comment__menu">
                  <button className="comment__delete" name={comment._id} onClick={this.props.handleDeleteComment}>X</button>
                  <button className="comment__edit" name={comment._id} onClick={this.props.handleEditComment}>
                    <FontAwesomeIcon icon="edit"/>
                  </button>
                </div>
                <div className="comment__text">{comment.text}</div>
                <div className="comment__author">Written by {commentAuthor.firstName} {commentAuthor.lastName}</div>
              </div>)
          }
         
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
              <Input name="commentText" onChange={this.props.handleCommentInputChange} 
                value={this.props.commentText} type="textarea"/>
              <Button onClick={this.props.handleSubmitButton}>Submit</Button>
            </form>
            {renderedComments}
          </div>
        </Container>
      </main>
    );
  }
}

