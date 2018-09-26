import './CompanionMessages.scss';

import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

export default class CompanionMessages extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    status: PropTypes.string,
    messages: PropTypes.string,
  };
  
  static defaultProps = {
    name: 'Неизвестный',
    status: 'Неопределенный',
    messages: '',
  };
  
  render() {
    const {name, status, messages} = this.props;
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="panel panel-default">
            <div className="panel-heading room-panel-heading">
              <div className="pull-left">{name}</div>
              <div className="pull-right">{status}</div>
            </div>
            <div className="panel-body room-companion-message">
              <ReactMarkdown source={messages}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
