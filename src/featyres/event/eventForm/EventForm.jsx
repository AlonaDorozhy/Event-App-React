import React, { Component } from "react";
import "react-daypicker/lib/DayPicker.css";

import Calendar from "react-calendar";
// import Calendar from "react-input-calendar";
class EventForm extends Component {
    state = {
        date: new Date(),
    }

    onChange = date => this.setState({ date })

  render() {
    return (
      <div>
        
        <button className="EvForm-button">Create event</button>

        <form className="RegForm" action="">
          <div class="container">
          

            <label for="email">
              <b>Event title</b>
            </label><br/>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              required
            /><br/>

            <label for="psw">
              <b>Event day</b>
            </label><br/>
                    <Calendar
                        onChange={this.onChange}
                        value={this.state.date}
                    />
                  
                    {/* <Calendar format='DD/MM/YYYY' date='4-12-2014' /> */}
                    
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            /><br/>

            <label for="psw-repeat">
              <b>City</b>
            </label><br/>
            <input
              type="password"
              placeholder="Repeat Password"
              name="psw-repeat"
              required
            />
            <br />
            <label for="psw-repeat">
              <b>Venue</b>
            </label><br/>
            <input
              type="password"
              placeholder="Repeat Password"
              name="psw-repeat"
              required
            />
            <br />
            <label for="psw-repeat">
              <b>Hosted by</b>
            </label><br/>
            <input
              type="password"
              placeholder="Repeat Password"
              name="psw-repeat"
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
            <button type="submit" class="registerbtn">
              Cancel
            </button>
          </div>

          
        
        </form>
      </div>
    );
  }
}

export default EventForm;
