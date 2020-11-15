import React, {useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AddTicketForm } from "../../components/addTicketForm/AddTicketForm.comp";
import { PageBreadcrumb } from "../../components/breadcrumb/PageBreadcrumb.comp";

const initialFrmDt ={
    subject:'',
    issueTitle:'',
    detail:''
}
export const AddTicket = () => {

    const [frmData, setFrmdata] =  useState(initialFrmDt)

const handleOnChange = (e) => {
    const {name, value} = e.target;
    setFrmdata({
        ...frmData,
        [name]: value
    });
    // console.log(name,value)
}

const handleOnSubmit = e =>{
    e.preventDefault();
    console.log(frmData);
}

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col><AddTicketForm handleOnSubmit={handleOnSubmit} handleOnChange={handleOnChange} frmDt ={frmData}/></Col>
      </Row>
    </Container>
  );
};
