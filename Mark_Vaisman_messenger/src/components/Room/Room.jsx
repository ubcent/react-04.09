import './Room.scss';

import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import UserMessages from 'components/UserMessages';
import CompanionMessages from 'components/CompanionMessages';

export default class Room extends PureComponent {
  static propTypes = {
    editorMessage: PropTypes.string,
    onEditorStateChange: PropTypes.func.isRequired,
    onButtonClick: PropTypes.func.isRequired,
    userMessages: PropTypes.string,
    companionName: PropTypes.string,
    companionStatus: PropTypes.string,
    companionMessages: PropTypes.string,
  };
  
  static defaultProps = {
    editorMessage: '',
    userMessages: '',
    companionName: 'Неизвестный',
    companionStatus: 'Неопределенный',
    companionMessages: '',
  };
  
  render() {
    const {editorMessage, onEditorStateChange, onButtonClick, userMessages, companionName, companionStatus, companionMessages} = this.props;
    return (
      <div className="row">
        <div className="col-sm-6">
          <CompanionMessages name={companionName} status={companionStatus} messages={companionMessages}/>
        </div>
        <div className="col-sm-6">
          <UserMessages
            messages={userMessages}
            editorMessage={editorMessage}
            onEditorStateChange={onEditorStateChange}
            onButtonClick={onButtonClick}/>
        </div>
      </div>
    );
  }
}
