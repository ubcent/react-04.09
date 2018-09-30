import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CommentsList from 'components/CommentsList';
import { mountEvents, sendMessage } from 'actions/messages';

class ChatContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      author: '',
      text: '',
    }
  }

  static propTypes = {
    messages: PropTypes.arrayOf(),
    mountEvents: PropTypes.func,
    sendMessage: PropTypes.func,
  }

  componentDidMount() {
    const { mountEvents } = this.props;
    mountEvents();
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSend = (e) => {
    const { sendMessage } = this.props;

    sendMessage(this.state);
    e.preventDefault();
  }

  render() {
    const { messages } = this.props;
    const { author, text } = this.state;

    return (
      <Fragment>
        <ul>
          {messages.map((message, idx) => <li key={idx}>{message.author}: {message.text}</li>)}
        </ul>
        <form>
          <input placeholder="Author" onChange={this.handleChange} type="text" name="author" value={author} /><br />
          <textarea placeholder="Message" onChange={this.handleChange} name="text" value={text}></textarea><br />
          <button onClick={this.handleSend}>Send</button>
        </form>
      </Fragment>
    )
  }
}

// Отвечает за то, что будет в props компонента
function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    messages: state.messages.entities,
  } 
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    mountEvents: () => dispatch(mountEvents()),
    sendMessage: (message) => dispatch(sendMessage(message)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);