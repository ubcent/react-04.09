import './Room.scss';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import React, {PureComponent} from 'react';
import {EditorState} from 'draft-js';
import {handleNewLine} from "draftjs-utils";
import {stateToHTML} from 'draft-js-export-html';
import {Editor} from 'react-draft-wysiwyg';
import Parser from 'html-react-parser';
import Data from "components/Data";

export default class Room extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      myMessage: '',
      companionId: this.props.companion,
      companionName: '',
      companionStatus: '',
      companionMessage: '',
    };
    this.intervalCompanion = null;
  }
  
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState: editorState,
    });
  };
  
  sendMessage = () => {
    if (this.state.editorState.getCurrentContent().hasText()) {
      this.setState({
        myMessage: this.state.myMessage.concat(stateToHTML(this.state.editorState.getCurrentContent())),
        editorState: EditorState.createEmpty(),
      });
    }
  };
  
  clearEditor = () => {
    this.setState({
      editorState: EditorState.createEmpty(),
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
  
  onEditorHandleReturn = (event) => {
    const editorState = handleNewLine(this.state.editorState, event);
    if (editorState) {
      this.onEditorStateChange(editorState);
    }
    return true;
  };
  
  componentWillReceiveProps(nextProps) {
    if (this.props.companion !== nextProps.companion) {
      this.setState({
        companionId: nextProps.companion,
        myMessage: '',
      })
    }
  }
  
  componentDidMount() {
    this.intervalCompanion = setInterval(() => {
      Data.getCompanionInfo(this.state.companionId, this);
      Data.getCompanionMessages(this.state.companionId, this)
    }, 1000)
  };
  
  componentWillUnmount() {
    clearInterval(this.intervalCompanion);
  }
  
  render() {
    const {editorState, myMessage, companionName, companionStatus, companionMessage} = this.state;
    return (
      <div className="row">
        <div className="col-sm-6">
          <div className="row">
            <div className="col-sm-12">
              <div className="panel panel-default">
                <div className="panel-heading room-panel-heading">
                  <div className="pull-left">{companionName}</div>
                  <div className="pull-right">{companionStatus}</div>
                </div>
                <div className="panel-body room-companion-message">
                  {Parser(companionMessage)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="row">
            <div className="col-sm-12">
              <div className="panel panel-default">
                <div className="panel-heading">Мои сообщения</div>
                <div className="panel-body room-my-message">
                  {Parser(myMessage)}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="panel panel-default">
                <div className="panel-body room-my-input">
                  <Editor
                    editorState={editorState}
                    wrapperClassName="demo-wrapper"
                    editorClassName="editer-content my-room-editer-content"
                    onEditorStateChange={this.onEditorStateChange}
                    toolbar={{
                      options: ['inline', 'emoji'],
                      inline: {options: ['bold', 'italic', 'underline', 'strikethrough']},
                    }}
                    handleReturn={this.onEditorHandleReturn}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <button type="button" name="clear-button" className="btn btn-default pull-left my-room-button" onClick={this.onButtonClick}>Очистить</button>
              <button type="button" name="send-button" className="btn btn-default pull-right my-room-button" onClick={this.onButtonClick}>Отправить</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}