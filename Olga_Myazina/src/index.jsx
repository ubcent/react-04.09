import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Layout from 'components/Layout';

class Main extends Component {
  render() {
    return <Layout>Добро пожаловать на страницы блога </Layout>;
  }
}

ReactDom.render(<Main />, document.getElementById('main'));
