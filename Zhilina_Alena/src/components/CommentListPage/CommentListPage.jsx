import React, { PureComponent, Fragment} from 'react';

import Main from 'components/Main/index';
import Aside from 'components/Aside/index';
import Search from 'components/Search/index';
import Login from 'components/Login/index';
import Categories from 'components/Categories/index';
import CommentList from 'components/List';

export default class CommentListPage extends PureComponent{
    render(){
        return(
            <Fragment>
                <Main>
                    <CommentList type="comment" />
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