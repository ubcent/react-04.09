import './MainPage.css';

import React, { Component, Fragment } from 'react';
import classNames from 'classnames';

export default class MainPage extends Component {
  render() {
    return (
      <Fragment>
        <article>
          <p> статья 1 </p>
        </article>
        <article>
          <p>статья 2</p>
        </article>
      </Fragment>
    );
  }
}
