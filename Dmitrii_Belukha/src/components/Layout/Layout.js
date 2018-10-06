import React, { Component, Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { content } = this.props;

    return (
      <Fragment>
        <Header />
        {content}
        <Footer />
      </Fragment>
    );
  }
}

export default Layout;
