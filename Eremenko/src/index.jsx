import './vendors.js';

import React, {Fragment, Component} from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter } from 'reactstrap';

import Navtop from 'components/Navtop';
import Header from 'components/Header';
import Footer from 'components/Footer';

import 'react-holder-component';
import routes from './routes';

const items = ["Mwe", "Gth", "Opr"];

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: true,
        };
    }
    toggleModal = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                modal: !this.state.modal,
            }
        });
    };
    componentDidMount() {

    }
    render() {

        return (
            <Fragment>
                <div className="container">
                    <Navtop categories={items} />

                    <Header />
                    <Switch>
                        {routes.map((route, idx) => <Route key={idx} {...route}/>)}
                    </Switch>
                </div>
                <Footer />
                <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Hello user!</ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggleModal}>Close</Button>
                    </ModalFooter>
                </Modal>
            </Fragment>
        );
    }
}

ReactDom.render(
    <BrowserRouter><App /></BrowserRouter>,
    document.getElementById('wrapper')
);