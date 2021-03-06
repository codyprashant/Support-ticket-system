import React from "react";
import { Table } from "react-bootstrap";
import PropTypes  from "prop-types"
import {Link} from "react-router-dom"

export const DashboardTickets = ({ tickets }) => {
  return (
    <Table hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Subjects</th>
          <th>Status</th>
          <th>Opened Date</th>
        </tr>
      </thead>
      <tbody>
        {tickets.length ? (
          tickets.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td><Link to ={`/ticket/${row.id}`}>{row.subject}</Link></td>
              <td>{row.status}</td>
              <td>{row.addedAt}</td>
            </tr>
          )))
        :(
            <tr>
                <td colSpan="4">
                    No Tickets to Show
                </td>
            </tr>
        )}

      </tbody>
    </Table>
  );
};

DashboardTickets.propTypes = {
  tickets : PropTypes.array.isRequired
}