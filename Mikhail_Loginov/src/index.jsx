import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css/normalize.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Layout from 'components/Layout';

ReactDOM.render(<Layout/>, document.getElementById('root'));
