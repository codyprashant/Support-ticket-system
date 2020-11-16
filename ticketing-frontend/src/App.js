import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import { PrivateRoute } from "./components/privateRoute/PrivateRoute";
// import { DefaultLayout } from "./layout/DefaultLayout";
import { Dashboard } from "./pages/dashboard/Dashboard.page";
import { Entry } from "./pages/entry/Entry.page";
import { AddTicket } from "./pages/new-ticket/AddTicket.page";
import { TicketList } from "./pages/ticket-list/TicketList.page";
import { Ticket } from "./pages/tickets/Ticket";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/"><Entry /></Route>
          {/* <DefaultLayout> */}
            <PrivateRoute path="/dashboard"><Dashboard /></PrivateRoute>
            <PrivateRoute path="/addTicket"><AddTicket /></PrivateRoute>
            <PrivateRoute path="/tickets"><TicketList /></PrivateRoute>
            <PrivateRoute path="/ticket/:tid"><Ticket /></PrivateRoute>
          {/* </DefaultLayout> */}
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
