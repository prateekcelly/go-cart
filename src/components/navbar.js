import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import "../style/App.css";
import "../style/style.css";

class NavBar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" className="fixed-top Nav-vertispace">
        <Navbar.Brand className="Nav-space" href="#home">
          GoCart
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="Nav-space" href="#men">
              Men
            </Nav.Link>
            <Nav.Link className="Nav-space" href="#women">
              Women
            </Nav.Link>
            <Nav.Link className="Nav-space" href="#women">
              Kids
            </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav className="">
            <Nav.Link className="Nav-space" href="#login">
              Login
            </Nav.Link>
            <Nav.Link className="Nav-space" href="#women">
              Signup
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;