import './Companions.scss';

import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';

export default class Companions extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      companionList: [],
      isClosed: true,
    };
  }
  
  close = () => {
    this.setState({isClosed: true})
  };
  
  open = () => {
    this.setState({isClosed: false})
  };
  
  componentDidMount() {
    fetch('http://localhost:3000/companions/')
    .then((response) => response.json())
    .then((list) => {
      this.setState({companionList: list});
    });
  };
  
  render() {
    const companionListModalClass = classNames(
      'companion-list-modal',
      {'companion-list-modal hidden': this.state.isClosed,}
    );
    const {companionList} = this.state;
    return (
      <div className="companion-menu">
        <button className="btn btn-default" role="button" onClick={this.open}>Собеседники</button>
        <div className={companionListModalClass}>
          <div onClick={this.close}>x</div>
          {
            companionList.length ?
              companionList.map((companion) => <Link to={'/companion/' + companion.id} onClick={this.close} key={companion.id}>{companion.name}</Link>) :
              <p>Сервер Off-line</p>
          }
        </div>
      </div>
    );
  }
}
