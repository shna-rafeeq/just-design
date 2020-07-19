import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

export default function Navbar1() {
  return (
    <>
      <style type="text/css">
        {`
    .btn-login {
      background-color: #FFFFFF;
      color: #18A0FB;
      border:1px solid #18A0FB;
      width: "130px";
height: "40px";
    }

    .btn-register {
        background-color: #18A0FB;
        color: white;
    }
    `}
      </style>

      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home" style={{ color: "#18A0FB" }}>
              Home
            </Nav.Link>
            <Nav.Link href="#link" style={{ color: "#18A0FB" }}>
              About
            </Nav.Link>
            <Nav.Link href="#link" style={{ color: "#18A0FB" }}>
              Route List
            </Nav.Link>
          </Nav>

          <Button variant="login" className="px-4 py-1">
            Log In
          </Button>
          <Button variant="register" className="px-4 py-1">
            Register
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
