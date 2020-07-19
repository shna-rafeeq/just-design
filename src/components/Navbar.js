import React, { useState } from "react";
import { Navbar, Nav, Button, Modal, Form, Row, Col } from "react-bootstrap";


export default function Navbar1() {
  const [show, setShow] = useState(false);
  let toogle = () => setShow((prev) => !prev);

  const [show2, setShow2] = useState(false);
  let toogle2 = () => setShow2((prev) => !prev);
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
      margin-top: 10%;
      max-width: 65%;
     
  
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
            className='px-4 py-1'
          >
            Login
          </Button>

          <Modal closeButton show={show} onHide={toogle} dialogClassName="custom-dialog" >
            <Modal.Header closeButton>  <h1>Log in Now</h1></Modal.Header>
            <Modal.Body >
              <Row>
                <Col>
                  <Form className=' my-5' >
                    <Row >
                      <Col> <Form.Group >
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group></Col>
                    </Row>
                    <Row className='my-2'>
                      <Col>
                        <Form.Group >
                          <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col><Button variant='register' className='px-4 my-2' style={{ boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.25)' }}> Log in</Button></Col>
                    </Row>
                  </Form>
                </Col>
                <Col lg={4} md={4} className='d-flex justify-content-end'>
                  <div >
                    <img
                      src={require("../image/signup.png")}
                      alt="my pic"
                      style={{ width: '100%', height: '100%', }}
                    />
                  </div>
                </Col>
              </Row>
            </Modal.Body>
          </Modal>

          <Button
            show={show2}
            variant="register"
            onClick={toogle2}
            className='px-4 py-1'
          >
            Register
          </Button>

          <Modal show={show2} onHide={toogle2} dialogClassName="custom-dialog">
            <Modal.Header closeButton>
              <Modal.Title>Sign up Now</Modal.Title>
            </Modal.Header>
            <Modal.Body >
              <Row>
                <Col>
                  <Form className='my-5' >
                    <Row>
                      <Col>
                        <Form.Group  >
                          <Form.Control type="text" placeholder="First name" />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group >
                          <Form.Control type="text" placeholder="Last name" />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row className='my-2'>
                      <Col>
                        <Form.Group >
                          <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <Form.Group >
                          <Form.Control type="password" placeholder="Create password" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Button variant='register' className='px-4 my-2' style={{ boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.25)' }}>Register</Button>
                      </Col>
                    </Row>
                  </Form>
                </Col>

                <Col lg={4} md={4} className='d-flex justify-content-end'>
                  <div >
                    <img
                      src={require("../image/login.png")}
                      alt="my pic"
                      style={{ width: '100%', height: '100%', }}
                    />
                  </div>
                </Col>
              </Row>
            </Modal.Body>
          </Modal>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
