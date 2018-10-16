import './scss/main.scss';

import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Layout from 'components/Layout';

import routes from './routes';
import store from './store';


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
    <Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>,
    document.querySelector('#app')
);