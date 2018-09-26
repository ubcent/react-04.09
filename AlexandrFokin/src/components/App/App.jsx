import './App.scss';

import React, { PureComponent } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from 'components/Header';

import routes from '../../routes';

/**
 * Класс App - корневой компонент, отображающий страницы сайта
 */
export default class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* Header */}
          <Header/>
          <Switch>
            {routes.map((route, idx) => <Route key={idx} {...route}/>)}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}