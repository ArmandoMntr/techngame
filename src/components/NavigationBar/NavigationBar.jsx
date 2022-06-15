import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./NavigationBar.scss";

/* Sales, Products, New Arrivals, Wish List, Contact Us, Login */
// no valid href values for now

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg" className="navBarWrapper">
      <Navbar.Brand href="#home" className="navBarTitle">
        <span>●</span> Tech n' Games
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto navBarButtons">
          <Nav.Link className="navBarLink" href="#home">
            Sales
          </Nav.Link>
          <Nav.Link className="navBarLink" href="#link">
            Products
          </Nav.Link>
          <Nav.Link className="navBarLink" href="#link">
            New Arrivals
          </Nav.Link>
          <Nav.Link className="navBarLink" href="#link">
            Contact Us
          </Nav.Link>
          <Nav.Link className="navBarLink loginLink" href="#link">
            Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
