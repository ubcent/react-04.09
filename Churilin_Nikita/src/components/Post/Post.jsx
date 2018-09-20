import './Post.css';

import React, { Component } from 'react';
import classNames from 'classnames';

export default class Post extends Component {
    render() {
        const classPost = classNames('classPost');

        return(
            <div className={classPost}>
                <div>
                    <a href="#">
                        <p>{this.props.firstP}</p>
                        <p>{this.props.secondP}</p>
                    </a>
                </div>
                <p>Posted by <a href="#">Start Bootstrap</a> {this.props.data}</p>
            </div>
        );
    }
}