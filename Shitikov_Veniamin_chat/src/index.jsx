import './style.css';

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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