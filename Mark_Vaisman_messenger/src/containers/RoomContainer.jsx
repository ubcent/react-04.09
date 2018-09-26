import React, {PureComponent} from 'react';
import Room from 'components/Room';

export default class RoomContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userMessages: '',
      editorMessage: '',
      companionId: 0,
      companionName: '',
      companionStatus: '',
      companionMessages: '',
    };
    this.intervalCompanion = null;
  }
  
  onEditorStateChange = (event) => {
    this.setState({
      editorMessage: event.target.value,
    });
  };
  
  sendMessage = () => {
    if (this.state.editorMessage.trim() !== '') {
      this.setState({
        userMessages: this.state.userMessages.concat(this.state.editorMessage, '\n\n'),
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
    if (this.state.companionId !== match.params.id) {
      this.setState({
        companionId: match.params.id,
        userMessages: '',
      });
      this.getCompanionInfo();
      this.getCompanionMessages();
    }
  }
  
  componentDidMount() {
    const {match} = this.props;
    this.intervalCompanion = setInterval(() => {
      this.getCompanionInfo();
      this.getCompanionMessages();
    }, 1000);
    if (this.state.companionId === 0 && !match.params.id) {
      this.getLastCompanionId();
    } else {
      this.setState({companionId: match.params.id});
    }
  };
  
  componentWillUnmount() {
    clearInterval(this.intervalCompanion);
  }
  
  getCompanionInfo = () => {
    fetch('http://localhost:3000/companions/' + this.state.companionId)
    .then((response) => response.json())
    .then((companion) => {
      this.setState({
        companionName: companion.name,
        companionStatus: companion.status,
      });
    }).catch(() => {
      this.setState({
        companionStatus: 'Off-line',
      });
    });
  };
  
  getCompanionMessages = () => {
    fetch('http://localhost:3000/messages/?companionId=' + this.state.companionId)
    .then((response) => response.json())
    .then((messages) => {
      this.setState({
        companionMessages: messages.reduce((accumulator, item) => accumulator + item.message + '\n\n', ''),
        companionStatus: 'On-line',
      });
    }).catch(() => {
      this.setState({
        companionStatus: 'Off-line',
      });
    });
  };
  
  getLastCompanionId = () => {
    fetch('http://localhost:3000/state/')
    .then((response) => response.json())
    .then((state) => {
      this.setState({
        companionId: state.lastCompanionId,
      });
    });
  };
  
  render() {
    const {editorMessage, userMessages, companionName, companionStatus, companionMessages} = this.state;
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
