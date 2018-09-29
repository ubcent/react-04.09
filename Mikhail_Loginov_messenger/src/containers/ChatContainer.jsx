import React, {PureComponent} from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container
} from 'reactstrap';
import propTypes from 'prop-types';
import {connect} from 'react-redux';

import Message from 'components/Message';
import {mountEvents, sendMessage} from 'actions/messages';

// Hardcoded current user
const USER = {
  id: '1',
  username: 'Mikhail',
  fullname: 'Mikhail',
  password: '12345',
  sockedId: '1',
}

class ChatContainer extends PureComponent {
  static propTypes = {
    dialogId: propTypes.number,
    messages: propTypes.array,
    users: propTypes.array,
    mountEvents: propTypes.func,
    sendMessage: propTypes.func,
  }

  state = {
    messageText: '',
    messages: [],
  }

  componentDidMount() {
    this.props.messages.forEach(message => {
      if (+message.dialogId === +this.props.dialogId) {
        this.setState({messages: this.state.messages.concat(message)});
      }
    });
    const {mountEvents} = this.props;
    mountEvents();
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmitClick = () => {
    let message = {
      id: '123',
      dialogId : this.props.dialogId,
      text: this.state.messageText,
      timestamp: Date.now(),
      author: USER,
    }

    const {sendMessage} = this.props;
    sendMessage(message);
  }

  render() {
    let renderedMessages = '';
    if (this.state.messages) {
      this.setState({messages: this.state.messages
        .sort((a, b) => a.timestamp > b.timestamp)
      })
      renderedMessages = this.state.messages.map((message, index) => {
        return <Message key={index} message={message}/>;
      });
    }
    return (
      <Container>
        <div className="chat-wrapper">
          {renderedMessages}
        </div>
        <Form>
          <FormGroup>
            <Label for="commentInput" hidden>Message</Label>
            <Input
              type="textarea"
              name="messageText"
              id="messageInput"
              placeholder="Your message"
              onChange={this.handleChange}
              value={this.state.messageText}/>
          </FormGroup>
          <Button onClick={this.handleSubmitClick}>Submit</Button>
        </Form>
      </Container>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    messages: state.messages,
    users: state.users,
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    mountEvents: () => mountEvents(dispatch),
    sendMessage: sendMessage(dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
