import './App.css'

import React, { Component, Fragment } from 'react';

import Nav from 'components/Nav';
import Header from 'components/Header';
import Main from 'components/Main';
import Footer from 'components/Footer';

const items = ["Mwe", "Gth", "Opr"];

export default class App extends Component {
    render() {
        return (
                <Fragment>
                    <div className="container">
                        <Nav>nav</Nav>
                        <Header size="small" categories={items} />
                        <Main>main</Main>
                    </div>
                    <Footer>footer</Footer>
                </Fragment>
        );
    }
}