import './Content.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Content extends Component {

  static propTypes = {
    text: PropTypes.string,
  };

  static defaultProps = {
    text: '',
  };

  render() {
    const {text} = this.props;
    return (
        <article className="content">
          {text}
        </article>
    );
  }

}

