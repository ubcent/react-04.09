import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './styles/main.scss';

import React, {Component} from 'react';
import ReactDom from 'react-dom';

import Layout from './layouts/Layout';

class App extends Component {
    render() {
        return (
            <Layout>
                <div className="container">Здесь будет контент сайта</div>
            </Layout>
        );
    };
}

ReactDom.render(<App/>, document.querySelector('#app'));