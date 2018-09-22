import './Menu.scss';

import React, {PureComponent} from 'react';
import Companions from "components/Companions";

export default class Menu extends PureComponent {
  render() {
    const {openRoom} = this.props;
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <Companions openRoom={openRoom}/>
        </div>
      </div>
    );
  }
}