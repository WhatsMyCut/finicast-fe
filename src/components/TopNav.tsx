import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export interface IProps {};
export interface IState {
  isOpen?: boolean;
  navbarTitle?: string;
}

class TopNav extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      navbarTitle: "Dashboard Builder"
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar color="inverse" light expand="md">
        <NavbarBrand href="/">Finicast</NavbarBrand>
        <div className={"navbar-title"}>
          {this.state.navbarTitle}
        </div>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/WhatsMyCut/finicast-fe" target='_blank'>Github</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
export default TopNav;
