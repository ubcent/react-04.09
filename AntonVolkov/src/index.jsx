import './scss/main.scss';

import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from 'components/Layout';

import routes from './routes';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Layout sidebar>
                    <Switch>
                        {routes.map((route, idx) => <Route key={idx} {...route} />)}
                    </Switch>
                </Layout>
            </Fragment>
        );
    }
}

ReactDom.render(
    <BrowserRouter><App /></BrowserRouter>,
    document.querySelector('#app')
);