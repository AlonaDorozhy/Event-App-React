import React, { Component } from "react";
import "react-daypicker/lib/DayPicker.css";

const emtyEvent ={
  title: "",
  date: "",
  city: "",
  venue: "",
  hostedBu: ""
}

class EventForm extends Component {
  state = {
    event: emtyEvent
  };

  componentDidMount(){
    if(this.props.selectedEvent !== null){
      this.setState({
        event: this.props.selectedEvent
      })
    }
  }
  componentWillReceiveProps(nextProps){
if (nextProps.selectedEvent !== this.props.selectedEvent){
  this.setState({ event: nextProps.selectedEvent || emtyEvent });
}
  }
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
              value={this.state.event.hostedBy}
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
