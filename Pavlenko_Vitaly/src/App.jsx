import React, {Component} from 'react';
import ReactDom from 'react-dom';

import Layout from 'layouts/Layout';
import MainPage from 'pages/MainPage';

export default class App extends Component {

    render() {

        return (
            <Layout>
                <MainPage/>
            </Layout>
        );
    }
}

ReactDom.render(<App/>, document.querySelector('#app'));