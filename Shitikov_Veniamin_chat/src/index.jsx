import './style.css';

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Chathead from 'components/Chathead';
import Chatbox from 'components/Chatbox';
import Chatinput from 'components/Chatinput';
import ChatRoom from './components/ChatRoom';
import Login from "./components/Login";
import store from './store';
import routes from './routes';



class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            {/*<ChatRoom URL='http://localhost:3000/users' />*/}
            <Provider store={store}>
                <Switch>
                    {routes.map((route, index) => {
                        return <Route key={index} exact={route.exact} path={route.path} component={route.component} />
                    })}
                </Switch>
            </Provider>
        </div>
    }
}

ReactDom.render(<BrowserRouter><Layout /></BrowserRouter>, document.getElementById('root'));