import './Alert.scss';

import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";

export default class Alert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClosed: false,
    };
  }
  
  static propTypes = {
    message: PropTypes.string,
  };
  
  static defaultProps = {
    message: 'Приветствуем Вас!',
  };
  
  close = () => {
    this.setState({isClosed: true})
  }
  
  render() {
    const alertClass = classNames('alert', {
      'alert hidden': this.state.isClosed,
    });
    const {message} = this.props;
    return (
      <div className={alertClass}>
        <div onClick={this.close}>x</div>
        <p>{message}</p>
      </div>
    );
  }
}

