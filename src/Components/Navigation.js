import React, { Component } from 'react';
import "../App.css"
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {Nav} from 'react-bootstrap';



export default class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar className="p-3 mb-2 bg-info text-white justify-content-between " >
      <Form inline>
        <InputGroup>
          <InputGroup.Text id="basic-addon1" >@</InputGroup.Text>
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <Nav className="mx-auto" >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Content">Content</Nav.Link>
            <Nav.Link href="#Contact us">Contact us</Nav.Link>
          </Nav>
        </InputGroup>
      </Form>
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" className="btn btn-outline-warning btn btn-info">Submit</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
      </div>
    )
  }
}
