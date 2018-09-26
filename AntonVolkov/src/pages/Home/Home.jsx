import './Home.scss';

import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import PostListContainer from 'containers/PostListContainer';

export default class Home extends Component {
    render() {
        return (
            <div className="home-pege">
                <p className="home-pege__text">It's Home Page. =)</p>
                <PostListContainer limit={4}/>
            </div>
        );
    }
}