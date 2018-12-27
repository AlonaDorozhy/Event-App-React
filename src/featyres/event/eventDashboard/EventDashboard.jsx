import React, { Component } from "react";
import EventList from "../eventList/EventList";

class EventDashboard extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-7 EvDash">
            <EventList />
          </div>
          <div className="col-md-5 EvDash2">
            <p>Alot of text</p>
          </div>
        </div>
      </div>
    );
  }
}

export default EventDashboard;
