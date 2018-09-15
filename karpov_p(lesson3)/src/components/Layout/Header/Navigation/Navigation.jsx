import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';

  import SignUp from 'components/Layout/Header/SignUp';

export default class Navigation extends Component {
    static propTypes = {
                navList: PropTypes.arrayOf(PropTypes.string),
            }
            static defaultProps = {
                navList: [],
            };
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { navList } = this.props;
    return (
      <div>
        <Navbar color="light" light expand="md">          
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar >
            {navList.map((item, idx) => <NavItem key={idx}><NavLink href="#">{item}</NavLink></NavItem>)}
            </Nav>
          </Collapse>
          <SignUp />
        </Navbar>
      </div>
    );
  }
}