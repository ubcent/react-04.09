import './css/bootstrap.css';
import './css/main.css';

import React, {PureComponent} from 'react';
import ReactDom from 'react-dom';
import Menu from 'components/Menu';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import routes from './routes';

class App extends PureComponent {
  render() {
    return (
      <div className="container">
        <Menu/>
        <Switch>
          {routes.map((route, idx) => <Route key={idx} {...route} />)}
        </Switch>
      </div>
    );
  }
}

ReactDom.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));
