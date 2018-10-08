import './MainPage.scss';

import React, { PureComponent } from 'react';

/**
 * Класс HomePage - компонент, отображающий главную страницу
 */
export default class MainPage extends PureComponent {
  render() {
    // Отображаем main
    return (
      <main className="container">
        <div className="home_header">
          <h1>
            About project
          </h1>
          <p>
            Welcome to our official project.
          </p>
        </div>
      </main>
    );
  }
}