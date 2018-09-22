import './Users.scss';

import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

//import UserListContainer from 'components/UserListContainer';

export default class Users extends Component {
    render() {
        return (
            <div className="Users-pege">
                <p className="Users-pege__text">It's Users Page. =)</p>
                {/*<UserListContainer itemsPerPage={10}/>*/}
            </div>
        );
    }
}