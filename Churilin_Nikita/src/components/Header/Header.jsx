import './Header.css';

import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: 'Clean Blog',
      otherHeaging: '',
      subHeading: 'A Blog Theme by Start Bootstrap'
    };
  }

  static propTypes = {
    menus: PropTypes.arrayOf(PropTypes.string), 
  };

  static defaultProps = {
    menus: [],
  };

  changeHeading = (menu) => {
    switch(menu.menu) {
      case 'HOME':
      this.setState(prevState => ({
        heading: 'Clean Blog',
        subHeading: 'A Blog Theme by Start Bootstrap'
      }));
      break;
      case 'ABOUT':
      this.setState(prevState => ({
        heading: 'About Me',
        subHeading: 'This is what I do.'
      }));
      break;
      break;
      case 'CONTACT':
      this.setState(prevState => ({
        heading: 'Contact Me',
        subHeading: 'Have questions? I have answers.'
      }));
      break;
    }
  };

  render() {
    const { menus } = this.props;
    const headerClasses = classNames('header');
    const logo = classNames('logo');
    const menu = classNames('menu');
    const heading = classNames('heading');

    return (
      <header className={headerClasses}>
        <div className={menu}>
          <a href="#" className={logo}>Start Bootstrap</a>
          <ul>
            {menus.map((menu, idx) => <li key={idx} onClick={() => this.changeHeading({menu})}><a href="#">{menu}</a></li>)}
          </ul>
        </div>
        <div className={heading}>
          <h1>{this.state.heading}</h1>
          <h2>{this.state.subHeading}</h2>
        </div>
      </header>
    );
  }
}