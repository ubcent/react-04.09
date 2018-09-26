import './Users.css';

import React, {
    PureComponent,
    Fragment
} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import jsonData from 'data/blogPosts.txt';

export default class Users extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
        };
    }

    componentDidMount = () => {
        const data = JSON.parse(jsonData);
        const users = [ ...new Set(data.posts.map((post) => (post.author))) ];
        this.setState({users});
    }
    
    render() {
        const contentClasses = classNames('content');
        const { users } = this.state;
        return <div className={contentClasses}>
                {users.map((user, index) => (<div key={index}>{user}</div>))}
            </div>
    }
}
