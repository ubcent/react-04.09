import React, {
    Component,
    Fragment
} from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ReactDom from 'react-dom';

import Layout from 'components/Layout';
import routes from './routes'

class App extends Component {
    render() {
        return ( 
            <Fragment >
                <Layout />
            </Fragment>
        );
    }
}

ReactDom.render( <BrowserRouter><App /></BrowserRouter> , document.getElementById('root'));
