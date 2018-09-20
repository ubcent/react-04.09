import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';

import Header from 'components/Header';
import Counter from 'components/Counter';
import CommentsList from 'components/CommentsList';
import CommentsForm from 'components/CommentsForm';

const creators = ['Vasya Pupkin', 'Petya Ivanov', 'Kolya Sidorov'];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    }
  }

  handleCommentRecieve = (comment) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        comments: prevState.comments.concat([comment]),
      }
    })
  }

  render() {
    const { comments } = this.state;
    return (
      <Fragment>
        <Header size="small" creators={creators}>
          <div>Content</div>
        </Header>
        <Counter />
        Hello world
        {comments.length && <CommentsList comments={comments} />}
        <CommentsForm onSend={this.handleCommentRecieve} />
      </Fragment>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
