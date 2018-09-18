import React, {Component} from 'react';
import ReactDom from 'react-dom';

import Layout from 'layouts/Layout/index';
import MainPage from 'pages/MainPage/index';

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