import './Menu.css';

import React from 'react';

// Stateless
export default function(props) {
  return(
    <ul>
      {props.items.map((item, idx) => <li key={idx}><a href={item.href}>{item.titlt}</a></li>)}
    </ul>
  )
}