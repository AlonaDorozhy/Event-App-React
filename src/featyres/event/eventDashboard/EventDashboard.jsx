import React, { Component } from "react";
import EventList from "../eventList/EventList";

import EventForm from "../eventForm/EventForm";

const eventsDashbord = [
  {
    id: "1",
    title: "Trip to Tower of London",
    date: "2018-03-27T11:00:00+00:00",
    category: "culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: "Bob",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
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
    date: "2018-03-28T14:00:00+00:00",
    category: "drinks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Punch & Judy, Henrietta Street, London, UK",
    hostedBy: "Tom",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
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
      }
    ]
  }
];

class EventDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: eventsDashbord,
      isOpen: false
    };
    this.handleFormOpen = this.handleFormOpen.bind(this);
    this.handleFormClosed = this.handleFormClosed.bind(this);
  }
  handleFormOpen() {
    this.setState({
      isOpen: true
    });
  }

  handleFormClosed() {
    this.setState({
      isOpen: false
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-7 EvDash">
            <EventList events={this.state.events} />
          </div>
          <div className="col-md-5 EvDash2">
            <button onClick={this.handleFormOpen} isOpen="false">
              {" "}
              create event
            </button>
            {this.state.isOpen && <EventForm handleFormClosed ={this.handleFormClosed} />}
          </div>
        </div>
      </div>
    );
  }
}

export default EventDashboard;
