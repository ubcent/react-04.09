import './Layout.css';

import React, { Component } from 'react';

import Header from 'Components/Header';
import Menu from 'Components/Menu';
import MainPage from 'Components/MainPage';
import Footer from 'Components/Footer';
import categories from 'Mocks/categories.json';
import articles from 'Mocks/articles.json';

export default class Layout extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    
    this.state = {focused: 0};
  }

  showAlert = () => {
    alert('Добро пожаловать!');
  }

  componentDidMount = () => {
    setTimeout(this.showAlert, 0);
  }

  handleClick = (e) => {
    const index = +e.target.name;
    e.preventDefault();
    this.setState({focused: index});
  }

  render() {
    const { focused } = this.state;
    const menuItems = [{id: 0, name: 'Главная'}].concat(categories);
    return (
      <div className="Layout">
        <div className="wrapper">
          <Header />
          <Menu items={menuItems} handleClick={this.handleClick} focused={focused} />
          <MainPage articles={articles} focused={focused} />
        </div>
        <Footer />
      </div>
    );
  }
}
