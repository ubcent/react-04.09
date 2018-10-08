import './Home.css';

import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';

export default class Home extends PureComponent {
  constructor(props) {
    super(props);

  }
  
  render() {
    return (
      <div className="Home">
        <h1>Welcome to public chat!</h1>
          <button><Link to='/login'>Go to chat</Link></button>
      </div>
    );
  }
}
