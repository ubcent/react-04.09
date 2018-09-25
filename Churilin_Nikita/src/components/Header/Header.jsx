import './Header.css';

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

const styleForCheckedMenu = { borderBottom: '2px solid #fff', };

const nonStyle = { color: '#fff', };

export default class Header extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      checked: '/',
    };

    this.checked = this.checked.bind(this);
  };

  checked() {
    this.forceUpdate();
  };

  render() {
    return (
      <header>
        <div className="top">
          <Link to='/' onClick={this.checked}><span>Start Bootstrap</span></Link>
          <nav>
            <ul>
              <li onClick={this.checked} style={document.location.pathname === '/' ? styleForCheckedMenu : nonStyle}><Link to='/'>HOME</Link></li>
              <li onClick={this.checked} style={document.location.pathname === '/about' ? styleForCheckedMenu : nonStyle}><Link to='/about'>ABOUT</Link></li>
              <li onClick={this.checked} style={document.location.pathname === '/sample-post' ? styleForCheckedMenu : nonStyle}><Link to='sample-post'>SAMPLE POST</Link></li>
            </ul>
          </nav>
        </div>
        <div className="textInHeader">
          <h1>{document.location.pathname === '/' ? 'Clean Blog' :
            document.location.pathname === '/about' ? 'About Me' :
              document.location.pathname === '/sample-post' ? 'Sample post' : ''}</h1>
          <p>{document.location.pathname === '/' ? 'A Blog Theme by Start Bootstrap' :
            document.location.pathname === '/about' ? 'This is what I do.' :
              document.location.pathname === '/sample-post' ? 'Text for example' : ''}</p>
        </div>
      </header>
    );
  };
};
