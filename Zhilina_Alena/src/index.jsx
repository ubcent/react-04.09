import React, { Component, Fragment} from 'react';
import ReactDom from 'react-dom';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'normalize.css';

import Header from 'components/Header';
import Layout from 'components/Layout';
import Footer from 'components/Footer';

import Main from 'components/Main/index';
import Aside from 'components/Aside/index';

import routes from './routes';
import store from './store';

class App extends Component{

    render() {
        return (
            <Fragment>
                <Header />
                <Layout>
                    <Main>
                        <Switch>
                            {routes.map((route, idx) => <Route key={idx} {...route} />)};
                        </Switch>
                    </Main>
                    <Aside />
                </Layout>
                <Footer/>
            </Fragment>
        );
    }
}

ReactDom.render(
    <Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>,
    document.getElementById('root')
);
