import React, { PureComponent } from 'react';
import ReactDom from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import Layout from 'layouts/Layout/index';
import MainPage from 'pages/MainPage';
import Blog from 'pages/Blog';
import Comments from 'pages/Comments';
import SinglePost from 'pages/SinglePost';

export default class App extends PureComponent {

    render() {
        return (
            <Router>
                <Layout>
                    <Route exact path='/' component={MainPage}/>
                    <Route path='/blog' component={Blog}/>
                    <Route path='/comments' component={Comments}/>
                </Layout>
            </Router>
        );
    }
}

ReactDom.render(<App />, document.querySelector('#app'));