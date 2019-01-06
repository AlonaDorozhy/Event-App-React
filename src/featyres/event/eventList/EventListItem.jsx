import React, { Component } from "react";
import EventListAttendee from "./EventListAttendee";
 import {Link} from 'react-router-dom';


class EventListItem extends Component {
  render() {
    const { event, onEventOpen, deleteEvent } = this.props;
    return (
      <div className="row">
        <div className="EvLiIt-block">
          <div className="EvLiIt-title">
            <img
              alt="hostPhoto"
              className="EvLiAtt-avatar"
              src={event.hostPhotoURL}
            />
            <h3>{event.title}</h3>
            <h4>
              hosted by <a href="/">{event.hostedBy}</a>
            </h4>
          </div>
          <div className="EvLiIt-date">
            <span>Date | {event.date} </span>
            <span>time | </span>
            <span> location |{event.venue}</span>
          </div>

          <div className="EvLiIt-text">
            <span>{event.description}</span>
          </div>
          <div className="EvLiIt-buttonrow">
            {event.attendees &&
              event.attendees.map((attendee) => (
                <EventListAttendee key={attendee.id} attendee={attendee} />
              ))}
            <span>{event.attendee}</span>
            <button onClick={deleteEvent(event.id)} className="EvLiIt-button">
              Delete
            </button>
            <Link as={Link} to={`/event/${event.id}`}  >
              <button className="EvLiIt-button"> view</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default EventListItem;
