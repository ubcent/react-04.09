import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Layout from 'Components/Layout';

ReactDOM.render(
  <BrowserRouter><Layout /></BrowserRouter>,
  document.getElementById('root'),
);
