import React from "react";

const EventDetailedSidebar = ({ attendees }) => {
  const isHost = false;

  return <div className="row">
      <div className="col-12">
        {attendees && attendees.length} {attendees && attendees.length === 1 ? "Person" : "People"} Going
      </div>
      <div className ='row'>
      <div className="col-12">
      <div className=" other">
        {attendees && attendees.map(attendee => (
          <div className='row'>
            <div className="col-3" key={attendee.id} style={{ position: "relative" }}>
              {isHost && <div>Host</div>}
              <img
                className="EvLiAtt-avatar"
                src={attendee.photoURL}
                alt="photoURL"
              />
              <div clacName="Content">
                <a href="/">{attendee.name}</a>
              </div>{" "}
              <br />
            </div>
            </div>
          ))}
      </div></div></div>
    </div>;
};

export default EventDetailedSidebar;
