import './Blog.scss';

import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import PostListContainer from 'containers/PostListContainer';

export default class Blog extends Component {
    render() {
        return (
            <div className="Blog-pege">
                <p className="Blog-pege__text">It's Blog Page. =)</p>
                <PostListContainer itemsPerPage={10}/>
            </div>
        );
    }
}