import React, { Component } from "react";
import EventList from "../eventList/EventList";

import {connect} from 'react-redux';
 import { deleteEvent, } from '../eventActions';
const mapState = (state) => ({
  events : state.events,
})


const actions ={
  
  deleteEvent,

}
class EventDashboard extends Component {
 
  handleDeleteEvent = eventId => () => {
    this.props.deleteEvent(eventId);
   
  };

  render() {
    const {events} = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-7 EvDash">
            <EventList
              deleteEvent={this.handleDeleteEvent}
              onEventOpen={this.handleOpenEvent}
              events={events}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect (mapState, actions) (EventDashboard);
