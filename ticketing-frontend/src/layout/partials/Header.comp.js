import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from '../../assets/images/logo.png'

export const Header = () => {
  return (
    <Navbar bg="info" variant="dark" expand="md">
      <Navbar.Brand href="/dashboard">
          <img src={logo} alt="logo" width="50px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/dashboard">Home</Nav.Link>
          <Nav.Link href="/dashboard">Link</Nav.Link>
          <Nav.Link href="/dashboard">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
