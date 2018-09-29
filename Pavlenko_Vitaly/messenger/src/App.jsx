import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import Layout from 'layouts/Layout';

import routes from './routes';
import store from './store';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        {
                            routes.map((route, idx) => (
                                <Route key={idx} {...route}/>
                            ))
                        }
                    </Switch>
                </Layout>
            </BrowserRouter>
        </Provider>
    );
}

ReactDom.render(
    <App/>,
    document.querySelector('#app'),
);