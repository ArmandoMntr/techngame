import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./NavigationBar.scss";
import Cart from "./Cart/Cart";
import { NavLink } from "react-router-dom";

// no valid href values for now

const NavigationBar = () => {
  const categories = [
    { id: "1", address: "/", text: "All Products" },
    { id: "2", address: "/category/smartphones", text: "Smartphones" },
    { id: "3", address: "/category/laptops", text: "Laptops" },
    { id: "4", address: "/category/fragrances", text: "Fragances" },
  ];

  return (
    // <Navbar bg="light" expand="lg" className="navBarWrapper">
    //   <Navbar.Brand href="#home" className="navBarTitle">
    //     <span>●</span> Tech n' Games
    //   </Navbar.Brand>
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav className="me-auto navBarButtons">
    //       <Nav.Link className="navBarLink" href="#home">
    //         Sales
    //       </Nav.Link>
    //       <Nav.Link className="navBarLink" href="#link">
    //         Products
    //       </Nav.Link>
    //       <Nav.Link className="navBarLink" href="#link">
    //         New Arrivals
    //       </Nav.Link>
    //       <Nav.Link className="navBarLink" href="#link">
    //         Contact Us
    //       </Nav.Link>
    //       <Nav.Link className="navBarLink loginLink" href="#link">
    //         Login
    //       </Nav.Link>
    //       <Nav.Link className="navBarLink loginLink" href="#link">
    //         <Cart />
    //       </Nav.Link>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
    <Navbar bg="light" expand="lg" className="navBarWrapper">
      <Nav.Link as={NavLink} to="/" className="navBarTitle navbar-brand">
        <span>●</span> Tech n' Games
      </Nav.Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto navBarButtons">
          {categories.map((name) => {
            return (
              <Nav.Link
                as={NavLink}
                className={({ isActive }) => (isActive ? "activeClass" : "")}
                to={name.address}
                key={name.id}
              >
                {name.text}
              </Nav.Link>
            );
          })}
          <Nav.Link className="navBarLink">
            <Cart />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
