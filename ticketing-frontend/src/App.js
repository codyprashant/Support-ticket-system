import React from 'react';
import './App.css';
import {DefaultLayout} from './layout/DefaultLayout'
// import { Dashboard } from './pages/dashboard/Dashboard.page';
// import { Entry } from './pages/entry/Entry.page';
// import { AddTicket } from './pages/new-ticket/AddTicket.page';
// import { TicketList } from './pages/ticket-list/TicketList.page';
import { Ticket } from './pages/tickets/Ticket';

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <AddTicket/> */}
        {/* <TicketList /> */}
        <Ticket />
      </DefaultLayout>
    </div>
  );
}

export default App;
