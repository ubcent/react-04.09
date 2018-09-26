import './Menu.css';

import React from 'react';
import { withRouter } from 'react-router-dom';

// Stateless
function Menu(props) {
  return(
    <ul>
      {props.items.map((item, idx) => <li key={idx}><a href={item.href}>{item.titlt}</a></li>)}
    </ul>
  )
}

export default withRouter(Menu);