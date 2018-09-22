import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';

import Nav from 'components/Nav';
import Header from 'components/Header';
import Main from 'components/Main';
import Footer from 'components/Footer';

const items = ["Mwe", "Gth", "Opr"];

class App extends Component {
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

ReactDom.render(<App />, document.getElementById('wrapper'));