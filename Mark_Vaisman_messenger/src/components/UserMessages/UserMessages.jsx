import './UserMessages.scss';

import React, {Fragment, PureComponent} from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

export default class UserMessages extends PureComponent {
  static propTypes = {
    messages: PropTypes.string,
    editorMessage: PropTypes.string,
    onEditorStateChange: PropTypes.func.isRequired,
    onButtonClick: PropTypes.func.isRequired,
  };
  
  static defaultProps = {
    messages: '',
    editorMessage: '',
  };
  
  render() {
    const {messages, editorMessage, onEditorStateChange, onButtonClick} = this.props;
    return (
      <Fragment>
        <div className="row">
          <div className="col-sm-12">
            <div className="panel panel-default">
              <div className="panel-heading">Мои сообщения</div>
              <div className="panel-body room-user-message">
                <ReactMarkdown source={messages}/>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="panel panel-default">
              <div className="panel-heading">Новое сообщение</div>
              <div className="panel-body room-user-input">
                <textarea className="form-control" rows="3" onChange={onEditorStateChange} value={editorMessage}/>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <button type="button" name="clear-button" className="btn btn-default pull-left user-room-button" onClick={onButtonClick}>Очистить</button>
            <button type="button" name="send-button" className="btn btn-default pull-right user-room-button" onClick={onButtonClick}>Отправить</button>
          </div>
        </div>
      </Fragment>
    );
  }
}
