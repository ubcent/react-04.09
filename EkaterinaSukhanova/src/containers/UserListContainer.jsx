import React, { PureComponent, Fragment } from 'react';

import UserList from 'components/UserList';

export default class UserListContainer extends PureComponent{
    constructor(props){
        super(props);

        this.state = {
            users: [],
            loading: false,
            page: 1,
        };
    }

    loadMore = () => {
        const {page} = this.state;

        this.setState({
            loading: true
        });
        fetch(`http://jsonplaceholder.typicode.com/users?_page=${page}&_limit=5`)
            .then((response) => response.json())
            .then((newUsers) =>{
                this.setState((prevState) => ({
                    loading: false,
                    users: prevState.users.concat(newUsers),
                    page: prevState.page +1,
                }));
            });
    };

    componentDidMount() {
        this.loadMore();
    }

    render() {
        const { users, loading } = this.state;

        return (
            <Fragment>
                <UserList onLoadMore={this.loadMore} users={users} loading={loading}/>
            </Fragment>
        )
    }

}