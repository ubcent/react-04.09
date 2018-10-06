import React, { PureComponent, Fragment } from 'react';

import User from 'components/User';

export default class UserListContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            loading: false,
        };
    }

    load = () => {
        this.setState({ loading: true });
        fetch(`http://localhost:8000/users`)
            .then((response) => response.json())
            .then((users) => {
                this.setState(() => ({
                    loading: false,
                    users: users
                }));
            });
    };

    componentDidMount() {
        this.load();
    }

    render() {
        const { users, loading } = this.state;
        console.log(users);

        return (
            <Fragment>
                {users.map((user) => <User key={user._id} user ={ user }/>)}
                {loading && 'Loading...'}
            </Fragment>
        )
    }
}