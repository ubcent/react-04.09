import './Post.css';

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class Post extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {

    };
  };

  render() {
    return (
      <div className="post">
        <div>
          <Link to={`${this.props.link}`}>
            <h2>{this.props.heading}</h2>
            <h3>{this.props.shortDescriprion}</h3>
          </Link>
        </div>
        <p>Posted by <a href="#">{this.props.author}</a> on {this.props.date}</p>
      </div>
    );
  };
};
