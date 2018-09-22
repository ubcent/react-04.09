import './CommentsList.css';

import React, { Component, PureComponent } from 'react';

export default class CommentsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    }
    this.interval = null;
  }
  // После монитирования компонента
  componentDidMount() {
    this.interval = setInterval(() => {
      fetch('https://jsonplaceholder.typicode.com/comments')
        .then((response) => response.json())
        .then((comments) => {
          this.setState({
            comments: comments,
          });
        });
    })
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.id !== this.props.id) {
      this.setState({ width: 2 * nextProps.size })
    } 
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleDeleteClick = () => {
    const { comments, removeId } = this.state;
    this.setState({
      comments: comments.filter((comment) => comment.id !== removeId)
    })
  }
  
  render() {
    const { comments } = this.state; 
    return (
      <ul>
        {comments.map((comment, idx) => <li key={idx}>{comment.name}: {comment.body}</li>)}
      </ul>
    );
  }
}