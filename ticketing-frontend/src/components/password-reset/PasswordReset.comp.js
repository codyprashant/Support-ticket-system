import React from "react";
import PropTypes from 'prop-types'
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import './../../pages/entry/Entry.style.css'

export const ResetPassword = ({handleOnChange, handleOnResetSubmit, formSwitcher, email}) => {
  return (
    <Container className="box-size">
      <Row>
        <Col>
          <h1 className="text-info text-center">Reset Password</h1>
          <hr />
          <Form onSubmit={handleOnResetSubmit}>
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
            

            <Button type="submit">Send Activation Link</Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
          <Col>
          <a href="#!" onClick ={()=> formSwitcher('login')}> Logging Now</a>
          </Col>
      </Row>
    </Container>
  );
};

ResetPassword.protoTypes ={
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired
}