import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Layout from 'containers/LayoutContainer';
import store from './store';

class App extends Component {
    render() {
        return(
            <Layout />             
        )
    }
}

const app = document.getElementById('app');

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, app)