import './BubleWithMessage.css';

import React, {PureComponent} from 'react';

export default class BubleWithMessage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  };
  
  render() {
    return (
      <div style={this.props.style} className="buble-with-message">
        <h2>{this.props.name}</h2>
        <p>{this.props.text}</p>
      </div>
    );
  };
};
