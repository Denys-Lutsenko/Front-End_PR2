import React, { Component } from "react";
import {
  Navbar,
  Nav,
  FormControl,
  Container,
  Form,
  Button,
} from "react-bootstrap";
import logo from "./images/logo.png";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import Blog from "./Pages/Blog";

export default class Header extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar
            fixed="top"
            collapseOnSelect
            expand="lg"
            variant="dark"
          >
            <Container>
              <Navbar.Brand href="/">
                <img
                  src={logo}
                  height="30"
                  width="30"
                  className="d-inline-block align-top"
                  alt="Logo"
                />{" "}
                Denys Lutsenko 518st
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/about">
                    About us
                  </Nav.Link>
                  <Nav.Link as={Link} to="/contacts">
                    Contacts
                  </Nav.Link>
                  <Nav.Link as={Link} to="/blog">
                    Blog
                  </Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="d-inline mx-2"
                  />
                  <Button variant="outline-info">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contacts" element={<Contacts />} />
            <Route exact path="/blog" element={<Blog />} />
          </Routes>
        </Router>
      </>
    );
  }
}
