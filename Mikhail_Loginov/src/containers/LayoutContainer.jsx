import React, {PureComponent, Fragment} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import WelcomeModal from 'components/WelcomeModal';
import routes from '../routes';

export default class LayoutContainer extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <WelcomeModal/>
          <Header/>
          <Switch>
            {routes.map((route, index) => <Route key={index} {...route}/>)}
          </Switch>
          <Footer/>
        </Fragment>
      </BrowserRouter>
    )
  }
}
