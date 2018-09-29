import './Layout.css';

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from 'Components/Header';
import NavMenu from 'Components/NavMenu';
import Footer from 'Components/Footer';

import routes from '../../routes';

export default function Layout() {
  const menuItems = [
    { title: 'Главная', href: '/', exact: true },
    { title: 'Блог', href: '/posts', exact: false },
    { title: 'Комментарии', href: '/comments', exact: false },
    { title: 'Пользователи', href: '/users', exact: false },
  ];

  return (
    <div className="Layout">
      <div className="wrapper">
        <Header />

        <div className="container">
          <NavMenu items={menuItems} />

          <main className="main">
            <Switch>
              {routes.map((route, idx) => <Route key={idx} {...route} />)}
            </Switch>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
