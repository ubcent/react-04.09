import React, { PureComponent, Fragment} from 'react';

import Header from 'components/Header/index';
import Layout from 'components/Layout/index';
import Footer from 'components/Footer/index';
import Main from 'components/Main/index';
import ArticlePreview from 'components/ArticlePreview/index';
import Aside from 'components/Aside/index';
import Search from 'components/Search/index';
import Login from 'components/Login/index';
import Categories from 'components/Categories/index';
import Pagination from 'components/Pagination/index';

export default class PostPages extends PureComponent{
    render(){
        return(
            <Fragment>
                <Header />
                <Layout>
                    <Main>
                        <ArticlePreview />
                        <ArticlePreview />
                        <ArticlePreview />
                        <ArticlePreview />
                        <ArticlePreview />
                        <ArticlePreview />
                        <ArticlePreview />
                        <Pagination />
                    </Main>
                    <Aside>
                        <Search />
                        <Login />
                        <Categories />
                    </Aside>
                </Layout>
                <Footer />
            </Fragment>
        );
    }
}