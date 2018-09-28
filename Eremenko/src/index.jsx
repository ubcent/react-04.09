import './vendors.js';

import React from 'react';
import ReactDom from 'react-dom';

import App from 'components/Layouts';

ReactDom.render(<App nav="nav" header="header" main="main" footer="&copy; Eremenko ReactJS" />, document.getElementById('wrapper'));