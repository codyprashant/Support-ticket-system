import React, {useState} from "react";
import {Container, Row, Col, Button} from 'react-bootstrap'
import { PageBreadcrumb } from "../../components/breadcrumb/PageBreadcrumb.comp";
import { SearchForm } from "../../components/search-form/SearchForm";
import { DashboardTickets } from "../../components/tickets/DashboardTickets.comp";
import tickets from '../../assets/data/dummy-tickets.json'
import {Link} from "react-router-dom"

export const TicketList = () => {

const [str, setStr] =useState('')
const [dispTicket, setdispTicket] =useState(tickets)

const handleOnChange = e =>{
    const {value} =e.target;
    setStr(value);
    searchTicket(value)
}

const searchTicket = (sttr) =>{
    const displayTickets = tickets.filter(row=> row.subject.toLowerCase().includes(sttr.toLowerCase()))
    setdispTicket(displayTickets)
}

  return (
    <Container>
      <Row>
        <Col> 
          <PageBreadcrumb page="Ticket List" />
        </Col>
      </Row>
      <Row>
        <Col> 
        <Link to="/addTicket">
          <Button variant ="info"> Add New Ticket</Button>
          </Link>
        </Col>
        <Col className="text-right"> 
          <SearchForm handleOnChange={handleOnChange} str={str}/>
        </Col>
      </Row>
      <hr />
      <Row>
          <Col>
          <DashboardTickets tickets={dispTicket} />
          </Col>
      </Row>
    </Container>
  );
};
