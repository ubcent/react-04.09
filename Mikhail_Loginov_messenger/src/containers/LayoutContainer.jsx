import React, {PureComponent, Fragment} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from 'components/Header';
import ChatContainer from 'containers/ChatContainer';
import RoomsContainer from 'containers/RoomsContainer';
import Footer from 'components/Footer';

export default class LayoutContainer extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Header/>
          <Switch>
            <Route exact path='/' component={RoomsContainer}/>
            <Route 
              path='/chat/:dialogId' 
              render={(props) => <ChatContainer dialogId={+props.match.params.dialogId}/>}
            />
          </Switch>
          <Footer/>
        </Fragment>
      </BrowserRouter>
    );
  }
}
