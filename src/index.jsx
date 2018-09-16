import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';

import Header from 'components/Header';
import Counter from 'components/Counter';

const creators = ['Vasya Pupkin', 'Petya Ivanov', 'Kolya Sidorov'];

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header size="small" creators={creators}>
          <div>Content</div>
        </Header>
        <Counter />
        Hello world
      </Fragment>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
