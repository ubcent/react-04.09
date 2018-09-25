import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'normalize.css/normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';

import LayoutContainer from 'containers/LayoutContainer';
import App from './server';

export default new App();

ReactDOM.render(<LayoutContainer />, document.getElementById('root'));
