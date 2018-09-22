import './scss/main.scss';

import React, { PureComponent, Fragment } from 'react';
import ReactDom from 'react-dom';

import Layout from 'components/Layout';
import Home from 'pages/Home';
import Blog from 'pages/Blog';
import Comments from 'pages/Comments';
import Users from 'pages/Users';

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { page: 'Blog' };
    }

    render() {
        const changePage = (page) => {
            this.setState({
                ...this.state,
                page: page,
            });
        }

        return (
            <Fragment>
                <Layout onChangePage={changePage} sidebar>
                    {this.state.page === 'Home' && <Home />}
                    {this.state.page === 'Blog' && <Blog />}
                    {this.state.page === 'Comments' && <Comments />}
                    {this.state.page === 'Users' && <Users />}
                </Layout>
            </Fragment>
        );
    }
}

ReactDom.render(<App />, document.querySelector('#app'));