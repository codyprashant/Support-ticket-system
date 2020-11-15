import React from "react";
import PropTypes from 'prop-types'
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import './../../pages/entry/Entry.style.css'

export const Login = ({handleOnChange, handleOnSubmit, formSwitcher, email, pass}) => {
  return (
    <Container className="box-size">
      <Row>
        <Col>
          <h1 className="text-info text-center">Client Login</h1>
          <hr />
          <Form onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value = {email}
                onChange ={handleOnChange}
                placeholder="Enter email"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value = {pass}
                onChange ={handleOnChange}
                placeholder="Enter Password"
                required
              />
            </Form.Group>
            <Button type="submit">Login</Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
          <Col>
          <a href="#!" onClick={()=>formSwitcher('reset')}> Forgot Password</a>
          </Col>
      </Row>
    </Container>
  );
};

Login.protoTypes ={
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired
}