import React, { PureComponent, Fragment} from 'react';
import ReactDom from 'react-dom';

import 'normalize.css';

import Header from 'components/Header';
import Layout from 'components/Layout';
import Footer from 'components/Footer';
import HomePage from 'components/HomePage';
import BlogPages from 'components/BlogPages';
import UserPage from 'components/UserPage';
import CommentListPage from 'components/CommentListPage';

class App extends PureComponent{

    constructor(props){
        super(props);

        this.state={
            page: '/home',
        };

        this.pages = new Map([
            ['/home',<HomePage />],
            ['/blog',<BlogPages />],
            ['/comments',<CommentListPage />],
            ['/users',<UserPage />]
        ]);
    }

    updatePage = (value) =>{
        this.setState((prevState) => {
            return {
                ...prevState,
                page: value,
            }
        })
    };

    render() {
        const pageComponent = this.pages.get(this.state.page);
        return (
            <Fragment>
                <Header updatePage = {this.updatePage} />
                <Layout>
                    { pageComponent }
                </Layout>
                <Footer/>
            </Fragment>
        );
    }

}

ReactDom.render(<App />, document.getElementById('root'));
