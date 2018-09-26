import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

import routes from './routes';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <Header />
            <Switch>
                {routes.map((route, index) => {
                    return <Route key={index} exact={route.exact} path={route.path} component={route.component} /> 
                })}
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </div>
    }
}

ReactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);