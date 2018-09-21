import React, { PureComponent, Fragment} from 'react';

import Main from 'components/Main/index';
import Aside from 'components/Aside/index';
import Search from 'components/Search/index';
import Login from 'components/Login/index';
import Categories from 'components/Categories/index';
import UserList from 'components/List';

export default class UserPage extends PureComponent{
    render(){
        return(
            <Fragment>
                <Main>
                    <UserList type="user" />
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