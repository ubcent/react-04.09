import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import routes from './routes';

import Layout from 'layouts/Layout';

function App() {
    return (
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
    );
}

ReactDom.render(<App/>, document.querySelector('#app'));