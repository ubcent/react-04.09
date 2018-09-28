import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Layout from 'containers/LayoutContainer';

class App extends Component {
    render() {
        return(
            <Layout />             
        )
    }
}

const app = document.getElementById('app');

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, app)