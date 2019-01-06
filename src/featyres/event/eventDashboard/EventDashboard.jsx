import React, { Component } from "react";
import EventList from "../eventList/EventList";
import cuid from "cuid";
import EventForm from "../eventForm/EventForm";
import {connect} from 'react-redux';
 import {createEvent, deleteEvent, updateEvent} from '../eventActions';
const mapState = (state) => ({
  events : state.events,
})


const actions ={
  createEvent,
  deleteEvent,
updateEvent,
}
class EventDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // events: eventsDashbord,
      isOpen: false,
      selectedEvent: null
    };
    this.handleFormOpen = this.handleFormOpen.bind(this);
    this.handleFormClosed = this.handleFormClosed.bind(this);
  }
  handleFormOpen = () => {
    this.setState({
      selectedEvent: null,
      isOpen: true
    });
  };

  handleFormClosed = () => {
    this.setState({
      isOpen: false
    });
  };

  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
    this.props.createEvent(newEvent);
    this.setState({

      isOpen: false
    });
  };
  handkeUpdateEvent = updatedEvents => {
    this.props.updateEvent(updateEvent);
    this.setState({
    
      isOpen: false,
      selectedEvent: null
    });
  };

  handleOpenEvent = eventToOpen => () => {
    this.setState({
      selectedEvent: eventToOpen,
      isOpen: true
    });
  };
  handleDeleteEvent = eventId => () => {
    this.props.deleteEvent(eventId);
    // const updateEvent = this.state.events.filter(e => e.id !== eventId);
    // this.setState({
    //   events: updateEvent
    // });
  };

  render() {
    const { selectedEvent } = this.state;
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
          <div className="col-md-5 EvDash2">
            <button onClick={this.handleFormOpen} isOpen="false">
              create event
            </button>
            {this.state.isOpen && (
              <EventForm
                updateEvent={this.handkeUpdateEvent}
                selectedEvent={selectedEvent}
                createEvent={this.handleCreateEvent}
                handleFormClosed={this.handleFormClosed}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default connect (mapState, actions) (EventDashboard);
