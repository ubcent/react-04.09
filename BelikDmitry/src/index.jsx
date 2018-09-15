import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';

import Header from 'components/Header';

const creators = [
  'vasya', 'opas', 'kira'
];

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header size="small" creators={creators}/>
      </Fragment>
    );
  }
}

ReactDom.render(<App/>, document.getElementById('root'));