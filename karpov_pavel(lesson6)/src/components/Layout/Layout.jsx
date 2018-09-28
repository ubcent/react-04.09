import 'normalize.css';
import './Layout.css';

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import RegistrationForm from 'containers/RegistrationFormContainer';
import Chat from 'containers/ChatContainer';

export default class Layout extends Component {
    render() {  
        const { onGetApi, res, onBtnDisabled } = this.props; 
        
        return (
        <div className="wrapper">
            <Switch>
                <Route path='/' render={() => (<RegistrationForm onGetApi={onGetApi} onBtnDisabled={onBtnDisabled} /> )} exact />
                <Route path="/chat" render={() => <Chat onGetApi={onGetApi} res={res} exact />} />
            </Switch>
        </div>
        )
    }
}
