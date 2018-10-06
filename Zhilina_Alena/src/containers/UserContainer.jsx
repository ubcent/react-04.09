import React, { PureComponent, Fragment } from 'react';

import User from 'components/User';

export default class UserContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            user:{},
            loading: false,
        };
    }

    load = () => {
        this.setState({loading: true});

        const { match } = this.props;

            fetch(`http://localhost:3000/users/${match.params.idUser}`)
                .then((response) => response.json())
                .then((user) => {
                this.setState(() => ({
                    loading: false,
                    user: user
                }));
            })
    };

    componentDidMount() {
        this.load();
    }

    render() {
        const { user, loading } = this.state;

        return (
            <Fragment>
                <User user={ user } />
                {loading && 'Loading...'}
            </Fragment>
        )
    }
}