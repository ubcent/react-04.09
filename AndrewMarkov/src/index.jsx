import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';

import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { MainPage } from 'components/MainPage';
import { SignInModal } from 'components/SignInModal';

import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <MainPage />
                <Footer />
                <SignInModal />
            </Fragment>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('root'));