import React, { Component } from "react";
import EventList from "../eventList/EventList";
import cuid from 'cuid';
import EventForm from "../eventForm/EventForm";

const eventsDashbord = [
  {
    id: "1",
    title: "New Year celebration",
    date: "2018-03-27",
    category: "culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: "Natali",
    hostPhotoURL: "https://randomuser.me/api/portraits/women/27.jpg",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      },
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      }
    ]
  },
  {
    id: "2",
    title: "Trip to Punch and Judy Pub",
    date: "2018-03-28",
    category: "drinks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Punch & Judy, Henrietta Street, London, UK",
    hostedBy: "Taya",
    hostPhotoURL: "https://randomuser.me/api/portraits/women/54.jpg",
    attendees: [
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      },
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      },
      {
        id: "c",
        name: "Joe",
        photoURL: "https://randomuser.me/api/portraits/men/37.jpg"
      }
    ]
  }
];

class EventDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: eventsDashbord,
      isOpen: false,
      selectedEvent: null
    };
    // this.handleFormOpen = this.handleFormOpen.bind(this);
    // this.handleFormClosed = this.handleFormClosed.bind(this);
  }
  handleFormOpen =()=> {
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

  handleCreateEvent = (newEvent) =>{
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/user.png";
    const updatedEvents = [...this.state.events, newEvent];
    this.setState({
      events: updatedEvents,
      isOpen: false,
    })
  };

  handleEditEvent =(eventToUpdate)=>()=>{
    this.setState({
      selectedEvent: eventToUpdate,
      isOpen: true
    });
  }

  render() {
    const {selectedEvent} = this.state
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-7 EvDash">
            <EventList onEventEdit={this.handleEditEvent} events={this.state.events} />
          </div>
          <div className="col-md-5 EvDash2">
            <button onClick={this.handleFormOpen} isOpen="false">
              {" "}
              create event
            </button>
            {this.state.isOpen && <EventForm selectedEvent={selectedEvent} createEvent={this.handleCreateEvent} handleFormClosed ={this.handleFormClosed} />}
          </div>
        </div>
      </div>
    );
  }
}

export default EventDashboard;
