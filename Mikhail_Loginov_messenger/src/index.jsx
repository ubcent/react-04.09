import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'normalize.css/normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import LayoutContainer from 'containers/LayoutContainer';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <LayoutContainer />
    </Provider>, 
    document.getElementById('root'));
