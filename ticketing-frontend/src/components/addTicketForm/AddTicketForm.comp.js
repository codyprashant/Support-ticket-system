import React from "react";
import { Jumbotron, Form, Button, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import "../../assets/css/addTicketComp.css";

export const AddTicketForm = ({ handleOnSubmit, handleOnChange, frmDt }) => {
  return (
    <Jumbotron className="mt-3  bg-light">
      <h1 className="newTicketHeading text-info text-center">Add New Ticket</h1>
      <hr className="mb-4" />
      <Form onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Category
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="subject"
              minLength="6"
              maxLength="30"
              value={frmDt.subject}
              onChange={handleOnChange}
              placeholder="Subject"
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Issue Title
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="issueTitle"
              minLength="6"
              maxLength="50"
              value={frmDt.issueTitle}
              onChange={handleOnChange}
              placeholder="Issue Title"
              required
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>Issue Summary</Form.Label>
          <Form.Control
            as="textarea"
            name="detail"
            value={frmDt.detail}
            onChange={handleOnChange}
            rows="5"
            required
          />
        </Form.Group>
        <Button type="submit" variant="info">
          Submit Ticket
        </Button>
      </Form>
    </Jumbotron>
  );
};

AddTicketForm.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  frmDt: PropTypes.object.isRequired,
};
