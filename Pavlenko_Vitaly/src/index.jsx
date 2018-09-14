import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './styles/main.scss';

import React, {Component} from 'react';
import ReactDom from 'react-dom';

import Layout from 'layouts/Layout';
import MainPage from 'pages/MainPage';

ReactDom.render(
    <Layout>
        <MainPage/>
    </Layout>,
    document.querySelector('#app'));