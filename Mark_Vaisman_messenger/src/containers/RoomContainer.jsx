import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import Room from 'components/Room';
import {sendMessage, getCompanionData, getUserMessages} from 'actions/messages';

class RoomContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      editorMessage: '',
    };
  }
  
  onEditorStateChange = (event) => {
    this.setState({
      editorMessage: event.target.value,
    });
  };
  
  sendMessage = () => {
    const {sendMessage, companionId} = this.props;
    if (this.state.editorMessage.trim() !== '') {
      sendMessage({message: this.state.editorMessage, companionId: companionId});
      this.setState({
        editorMessage: '',
      });
    }
  };
  
  clearEditor = () => {
    this.setState({
      editorMessage: '',
    });
  };
  
  onButtonClick = (event) => {
    switch (event.target.name) {
      case 'send-button':
        this.sendMessage();
        break;
      case 'clear-button':
        this.clearEditor();
        break;
    }
  };
  
  componentWillReceiveProps(nextProps) {
    const {match} = nextProps;
    const {companionId, getCompanionData, getUserMessages} = this.props;
    if (match.params.id && companionId !== parseInt(match.params.id)) {
      getCompanionData(parseInt(match.params.id));
      getUserMessages(parseInt(match.params.id));
    }
  }
  
  componentDidMount() {
    const {getCompanionData, getUserMessages} = this.props;
    getCompanionData();
    getUserMessages();
  };
  
  render() {
    const {editorMessage} = this.state;
    const {companionName, companionStatus, companionMessages, userMessages} = this.props;
    return (
      <Room
        editorMessage={editorMessage}
        onEditorStateChange={this.onEditorStateChange}
        onButtonClick={this.onButtonClick}
        userMessages={userMessages}
        companionName={companionName}
        companionStatus={companionStatus}
        companionMessages={companionMessages}/>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    ...props,
    companionId: state.messages.companionId,
    companionName: state.messages.companionName,
    companionStatus: state.messages.companionStatus,
    companionMessages: state.messages.companionMessages,
    userMessages: state.messages.userMessages,
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    sendMessage: sendMessage(dispatch),
    getUserMessages: getUserMessages(dispatch),
    getCompanionData: getCompanionData(dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomContainer);
