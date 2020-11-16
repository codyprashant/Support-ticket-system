import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/breadcrumb/PageBreadcrumb.comp";
import tickets from "../../assets/data/dummy-tickets.json";
import { MessageHistory } from "../../components/message-history/MessageHistory";
import { UpdateTicket } from "../../components/update-ticket/UpdateTicket";
import { useParams } from "react-router-dom";

// const ticket = tickets[0];

export const Ticket = () => {
  const { tid } = useParams();
  const [message, setmessage] = useState("");
  const [ticket, setTicket] = useState("");

  useEffect(() => {
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i].id === parseInt(tid)) {
        setTicket(tickets[i]);
        continue;
      }
    }
  }, [message, tid]);

  const handleOnChange = (e) => {
    setmessage(e.target.value);
    // console.log(e.target.value)
  };

  const handleOnSubmit = () => {
    alert("form submitted");
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket Detail" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col sm="9" className="text-weight-bolder text-secondary">
          <div className="issueTitle">
            {" "}
            Summary Of Issue : {ticket.issueTitle}
          </div>
          <div className="date"> Created Date : {ticket.addedAt}</div>
          <div className="subject"> Category : {ticket.subject}</div>
          <div className="status"> Status : {ticket.status}</div>
        </Col>
        <Col sm="3" className="text-right">
          <Button variant="outline-info mr-auto">Close Ticket</Button>
        </Col>
      </Row>
      <hr />
      <Row className="mt-4">
        <Col>
         {ticket.history &&  <MessageHistory msg={ticket.history} />}
        </Col>
      </Row>
      <hr />
      <Row className="mt-4">
        <Col>
          <UpdateTicket
            msg={message}
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
          />
        </Col>
      </Row>
    </Container>
  );
};
