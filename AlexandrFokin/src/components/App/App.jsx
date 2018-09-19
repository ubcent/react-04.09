import './App.scss';

import React, { PureComponent, Fragment } from 'react';

import Header from 'components/Header';
import MainPage from 'components/MainPage';

/**
 * Класс App - корневой компонент, отображающий страницы сайта
 */
export default class App extends PureComponent {
  render() {
    return (
      <Fragment>
        {/* Header */}
        <Header/>
        {/* Контент главной страницы блога */}
        <MainPage>
          Контент блога
        </MainPage>
      </Fragment>
    );
  }
}