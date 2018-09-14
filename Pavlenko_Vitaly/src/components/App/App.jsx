import React, {Component} from 'react';
import ReactDom from 'react-dom';

import Layout from 'Pavlenko_Vitaly/src/layouts/Layout/index';
import MainPage from 'Pavlenko_Vitaly/src/pages/MainPage/index';

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