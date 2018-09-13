import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';

import Header from 'components/Header';
import Navbar from 'components/Navbar';
import Content from "components/Content/Content";

const creators = ['Vasya', 'Petya', 'Kolya'];

class App extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <Content size='small'>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum error magni, non officia perferendis possimus reiciendis sequi veniam veritatis voluptate?</div>
                </Content>
            </Fragment>
        );
    }
}

ReactDom.render(<App />, document.getElementById('root'));
