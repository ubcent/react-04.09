import './App.scss';

import React, { PureComponent } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import Header from 'components/Header';

import routes from '../../routes';
import store from 'store';

/**
 * Класс App - корневой компонент, отображающий страницы сайта
 */
export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            {/* Header */}
            <Header/>
            <Switch>
              {routes.map((route, idx) => <Route key={idx} {...route}/>)}
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}