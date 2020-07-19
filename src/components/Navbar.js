import React, { useState } from "react";
import { Navbar, Nav, Button, Modal, Form, Row } from "react-bootstrap";


export default function Navbar1() {
  const [show, setShow] = useState(false);
  let toogle = () => setShow((prev) => !prev);
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
    .custom-dialog{
      margin-top: 12%;
      max-width: none;
      width:50%;
  
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



          <Button
            show={show}
            variant="login"
            onClick={toogle}
            style={{ marginTop: "10px" }}
          >
            Login
          </Button>

          <Modal closeButton show={show} onHide={toogle} dialogClassName="custom-dialog" >
            <Modal.Header closeButton>  <h1>Log in Now</h1></Modal.Header>
            <Modal.Body style={{ height: '300px' }}>
              <div style={{ float: 'right' }}>
                <img
                  src={require("../image/login.png")}
                  alt="my pic"
                  // className="rounded w-75 mb-5 ml-5"
                  style={{ width: '240px', height: '270px' }}
                />

              </div>
              <Form >
                <Form.Row >
                  <Form.Group controlId="formGroupEmail">
                    <Form.Control type="email" placeholder="Enter email" style={{ width: '494px', height: '40px', marginTop: '30px' }} />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group controlId="formGroupPassword">
                    <Form.Control type="password" placeholder="Password" style={{ width: '494px', height: '40px', marginTop: '15px' }} />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Button variant='register' style={{ width: '130px', height: '40px', boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.25)' }}> Register</Button>
                </Form.Row>
              </Form>
            </Modal.Body>
          </Modal>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
