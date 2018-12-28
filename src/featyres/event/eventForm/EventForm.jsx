import React, { Component } from "react";
import "react-daypicker/lib/DayPicker.css";

class EventForm extends Component {
  state = {
    event: {
      title: "",
      date: "",
      city: "",
      venue: "",
      hosted: ""
    }
  };
  onFormSubmit = ev => {
    ev.preventDefault();
    this.props.createEvent(this.state.event);
  };
  onInputChange = ev => {
    const newEvent = this.state.event;
    newEvent[ev.target.name] = ev.target.value;
    this.setState({
      event: newEvent
    });
  };
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
              value={this.state.event.hosted}
              onChange={this.onInputChange}
              placeholder="Hosted by"
              name="hosted"
              required
            />
            <hr />
            <p>
              By creating an account you agree to our{" "}
              <a href="/">Terms & Privacy</a>.
            </p>
            <button type="submit" class="registerbtn">
              Submit
            </button>
            <button
              onClick={handleFormClosed}
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

export default EventForm;
