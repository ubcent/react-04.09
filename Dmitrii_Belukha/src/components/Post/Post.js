import React, { Component } from 'react';

class Post extends Component {
  render() {
    const { tag, title, date, text } = this.props;

    return (
      <div className="col-md-4">
        <div className="card flex-md-row mb-4 box-shadow h-md-250">
          <div className="card-body d-flex flex-column align-items-start">
            <strong className="d-inline-block mb-2 text-primary">{tag}</strong>
            <h3 className="mb-0">
              <a className="text-dark" href="#">
                {title}
              </a>
            </h3>
            <div className="mb-1 text-muted">{date}</div>
            <p className="card-text mb-auto">{text}</p>
            <a href="#">Continue reading</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
