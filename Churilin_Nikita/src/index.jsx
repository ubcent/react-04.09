import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';

import Page from 'components/Page';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Page></Page>
      </Fragment>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));