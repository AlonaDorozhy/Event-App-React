import React, { Component } from "react";
import "react-daypicker/lib/DayPicker.css";
import cuid from "cuid";
import { connect } from "react-redux";

import { createEvent, updateEvent } from "../eventActions";


const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: ""
  };

  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }

  return {
    event
  };
};

const actions = {
  createEvent,
  updateEvent
};

class EventForm extends Component {
  state = {
    event: Object.assign({}, this.props.event)
  };

  // componentDidMount() {
  //   if (this.props.selectedEvent !== null) {
  //     this.setState({
  //       event: this.props.selectedEvent
  //     });
  //   }
  // }
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.selectedEvent !== this.props.selectedEvent) {
  //     this.setState({ event: nextProps.selectedEvent || emtyEvent });
  //   }
  // }
  onFormSubmit = ev => {
    ev.preventDefault();
    if (this.state.event.id) {
      this.props.updateEvent(this.state.event);
      this.props.history.goBack();
    } else {
      const newEvent = {
        ...this.state.event,
        id: cuid(),
        hostPhotoURL: '/assets/user.png'
    }
      this.props.createEvent(newEvent)
      this.props.history.push('/events')
  };
}
  onInputChange = ev => {
    const newEvent = this.state.event;
    newEvent[ev.target.name] = ev.target.value;
    this.setState({
      event: newEvent
    })
  }
  render() {
    const { handleFormClosed } = this.props;
    // const {event} =this.state;
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="RegForm" action="">
          <div class="container">
            <label>Event title</label>
            <br />
            <input
              type="text"
              value={this.state.event.title}
              onChange={this.onInputChange}
              placeholder="Title"
              name="title"
              required
            />
            <br />
            <label>Event day</label>
            <br />
            <input
              type="date"
              value={this.state.event.date}
              onChange={this.onInputChange}
              name="date"
              required
            />
            <br />
            <label>City</label>
            <br />
            <input
              type="text"
              value={this.state.event.city}
              onChange={this.onInputChange}
              placeholder="City"
              name="city"
              required
            />
            <br />
            <label>Venue</label>
            <br />
            <input
              type="text"
              value={this.state.event.venue}
              onChange={this.onInputChange}
              placeholder="Venue"
              name="venue"
              required
            />
            <br />
            <label>Hosted by</label>
            <br />
            <input
              type="text"
              value={this.state.event.hostedBy}
              onChange={this.onInputChange}
              placeholder="Hosted by"
              name="hostedBy"
              required
            />
            <hr />

            <button type="submit" class="registerbtn">
              Submit
            </button>
            <button
             onClick= {this.props.history.goBack} 
              type="submit"
              class="registerbtn"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(mapState, actions)(EventForm);
