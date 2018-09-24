import './Users.scss';

import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import UsersListContainer from 'containers/UsersListContainer';

export default class Users extends Component {
    render() {
        return (
            <div className="Users-pege">
                <p className="Users-pege__text">It's Users Page. =)</p>
                <UsersListContainer />
            </div>
        );
    }
}