import './Menu.scss';

import React from 'react';
import Companions from 'components/Companions';

export default function Menu() {
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <Companions/>
      </div>
    </div>
  );
}
