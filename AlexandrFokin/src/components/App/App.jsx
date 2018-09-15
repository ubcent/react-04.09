import './App.scss';

import React, { Component, Fragment } from 'react';

import Header from 'components/Header';
import MainPage from 'components/MainPage';

/**
 * Класс корневой компонент страницы сайта
 */
export default class App extends Component {
  render() {
    return (
      <Fragment>
        {/* Header */}
        <Header/>
        {/* Контент главной страницы блога */}
        <MainPage size='small'>
          Контент блога
        </MainPage>
      </Fragment>
    );
  }
}