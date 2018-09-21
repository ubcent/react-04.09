import './Layout.css';

import React, { PureComponent } from 'react';

import Header from 'Components/Header';
import NavMenu from 'Components/NavMenu';
import MainPage from 'Components/MainPage';
import Footer from 'Components/Footer';
import PostsContainer from 'Containers/PostsContainer';
import CommentsContainer from 'Containers/CommentsContainer';
import UsersContainer from 'Containers/UsersContainer';

export default class Layout extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { focused: 1 };
  }

  handleNavMenuClick = (e) => {
    e.preventDefault();
    const focused = +e.target.dataset.id;
    this.setState({ focused });
  }

  render() {
    const { focused } = this.state;
    const menuItems = [
      { id: 1, name: 'Главная' },
      { id: 2, name: 'Блог' },
      { id: 3, name: 'Комментарии' },
      { id: 4, name: 'Пользователи' },
    ];

    return (
      <div className="Layout">
        <div className="wrapper">
          <Header />

          <div className="container">
            <NavMenu items={menuItems} handleClick={this.handleNavMenuClick} focused={focused} />

            <main className="main">
              {focused === 1 && <MainPage />}
              {focused === 2 && <PostsContainer />}
              {focused === 3 && <CommentsContainer />}
              {focused === 4 && <UsersContainer />}
            </main>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
