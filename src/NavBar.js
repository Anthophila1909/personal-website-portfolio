import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./css/NavBar.css";

export default function NavBar() {
  return (
    <Navbar expand="lg" className="custom-navbar" sticky="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Elena Würtz
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/ueber-mich">
              Über mich
            </Nav.Link>
            <Nav.Link as={NavLink} to="/projekte">
              Projekte
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
