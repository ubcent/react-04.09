import './App.scss';

import React, { PureComponent } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// позволяет получать необходимые данные из store с помощью функции connect
import {Provider} from 'react-redux';

import Header from 'components/Header';

// машрутизация сайта
import routes from '../../routes';
// хранилище Redux
import store from '../../store';

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