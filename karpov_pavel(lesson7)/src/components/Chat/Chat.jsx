import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from '../../routes';
import СompanionsList from 'containers/СompanionsListContainer';

export default class Chat extends Component {
 
    render() {      
        const { res } = this.props;
        return (  
           <Fragment>
               <h1 className="main-heading">Welcome to chat, dear {res}</h1>
               <СompanionsList />
               <Switch>
                    {routes.map((route, idx) => <Route {...route} key={idx}/>)}                   
               </Switch>
           </Fragment>
        );
    }
}
