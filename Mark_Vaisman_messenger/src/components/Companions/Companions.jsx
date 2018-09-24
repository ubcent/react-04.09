import './Companions.scss';

import React, {PureComponent} from 'react';
import classNames from 'classnames';
import Data from "components/Data";

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
  
  openRoom = (event) => {
    this.close();
    this.props.openRoom(event.target.name);
  };
  
  componentDidMount() {
    Data.getCompanionList(this);
  };
  
  render() {
    const companionListModalClass = classNames('companion-list-modal', {
      'companion-list-modal hidden': this.state.isClosed,
    });
    const {companionList} = this.state;
    return (
      <div>
        <a className="btn btn-default" href="#" role="button" onClick={this.open}>Собеседники</a>
        <div className={companionListModalClass}>
          <div onClick={this.close}>x</div>
          {companionList.map((companion) =>
            <p key={companion.id}><a href="#" title={companion.name} name={companion.id} onClick={this.openRoom}>{companion.name} ({companion.status})</a></p>
          )}
        </div>
      </div>
    );
  }
}