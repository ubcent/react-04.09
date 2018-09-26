/* eslint react/prop-types: 0 */

import './WelcomeModal.css';

import React, {PureComponent} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import propTypes from 'prop-types';

export default class WelcomeModal extends PureComponent {
  state = {
    modal: true,
  }

  static propTypes = {
    className: propTypes.string,
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Welcome</ModalHeader>
          <ModalBody>
            My blog is awesome, init? You can freely move between blog posts, and it&apos;s all working on ReactJS! Have a good day!
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}