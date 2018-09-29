import './css/bootstrap.css';
import './css/main.css';

import React, {PureComponent} from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import ConnectionContainer from 'containers/ConnectionContainer';
import Menu from 'components/Menu';

import routes from './routes';
import store from './store';

class App extends PureComponent {
  
  render() {
    return (
      <div className="container">
        <ConnectionContainer/>
        <Menu/>
        <Switch>
          {routes.map((route, idx) => <Route key={idx} {...route} />)}
        </Switch>
      </div>
    );
  }
}

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
