import './Layouts.css'

import React, { PureComponent, Fragment } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter } from 'reactstrap';

import Navtop from 'components/Navtop';
import Header from 'components/Header';
import Main from 'components/Main';
import Footer from 'components/Footer';

const items = ["Mwe", "Gth", "Opr"];

export default class Layouts extends PureComponent {
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
        const { nav, header, main, footer } = this.props;

        return (
                <Fragment>
                    <div className="container">
                        <Navtop categories={items}>{nav}</Navtop>
                        <Header>{header}</Header>
                        <Main>{main}</Main>
                    </div>
                    <Footer>{footer}</Footer>
                    <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
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