import React, { PureComponent, Fragment} from 'react';

import Main from 'components/Main/index';
import BlogPreview from 'components/BlogPreview';
import Aside from 'components/Aside/index';
import Search from 'components/Search/index';
import Login from 'components/Login/index';
import Categories from 'components/Categories/index';
import Pagination from 'components/Pagination/index';

export default class PostPages extends PureComponent{
    render(){
        return(
            <Fragment>
                <Main>
                    <BlogPreview />
                    <BlogPreview />
                    <BlogPreview />
                    <BlogPreview />
                    <BlogPreview />
                    <BlogPreview />
                    <BlogPreview />
                    <Pagination />
                </Main>
                <Aside>
                    <Search />
                    <Login />
                    <Categories />
                </Aside>
            </Fragment>
        );
    }
}