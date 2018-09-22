import './Comments.scss';

import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

//import CommentListContainer from 'components/CommentListContainer';

export default class Comments extends Component {
    render() {
        return (
            <div className="Comments-pege">
                <p className="Comments-pege__text">It's Comments Page. =)</p>
                {/*<CommentListContainer itemsPerPage={10}/>*/}
            </div>
        );
    }
}