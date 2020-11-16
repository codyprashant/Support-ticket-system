import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { DashboardTickets } from "../../components/tickets/DashboardTickets.comp";
import tickets from "../../assets/data/dummy-tickets.json";
import { PageBreadcrumb } from "../../components/breadcrumb/PageBreadcrumb.comp";
import {Link} from "react-router-dom"

export const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Dashboard" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Link to="/addTicket">
          <Button
            variant="info"
            style={{ fontSize: "2rem", padding: "10px 30px" }}
          >
            Add new tickets
          </Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <div>Total Tickets:50</div>
          <div>Total Tickets:5</div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-2">
          <div>Recently Added Tickets</div>
        </Col>
      </Row>
      <Row>
        <Col className="recent-ticket">
          <DashboardTickets tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
};
