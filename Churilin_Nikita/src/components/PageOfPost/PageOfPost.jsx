import './PageOfPost.css';

import React, { PureComponent } from 'react';

import posts_archive from 'components/posts_archive';

export default class PageOfPost extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {

    };
  };

  render() {
    let data;
    switch (document.location.pathname) {
    case '/0':
      data = posts_archive[0];
      break;
    case '/1':
      data = posts_archive[1];
      break;
    case '/2':
      data = posts_archive[2];
      break;
    case '/3':
      data = posts_archive[3];
      break;
    };

    return (
      <div className="page-of-post">
        <h2>{data.heading}</h2>
        <p>{data.shortDescriprion}</p>
      </div>
    );
  };
};
