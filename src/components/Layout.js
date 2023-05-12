import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">News Data</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/company">Company</Nav.Link>
            <Nav.Link href="/person">Person</Nav.Link>
            <Nav.Link href="/country">Country</Nav.Link>
            <Nav.Link href="/custom-entity">Custom Entity</Nav.Link>
            <Nav.Link href="/price">Price</Nav.Link>
            <Nav.Link href="/about-me">About Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>{children}</Container>
    </div>
  );
};
