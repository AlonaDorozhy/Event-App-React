import React from "react";




import { Link } from "react-router-dom";
const eventImageStyle = {
    filter: 'brightness(30%)'
};

const eventImageTextStyle = {
    position: 'absolute',
    bottom: '80%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};

const EventDetailedHeader = ({ event }) => {
  return <div className=" EvDet-Header">
      <div>
      <img style={eventImageStyle} className="EvDet-Header-img" src={require(`../../../img/categoryImages/${event.category}.jpg`)} alt="eventPoster" />
        
        <div style={eventImageTextStyle} className="EvDet-inform">
          <div className="EvDet-title">
            <p>{event.title}</p>
          </div>
          <p className="EvDet-title-small">{event.date} |</p>
          <p className="EvDet-title-small">Hosted by {event.hostedBy}</p>
          <br />
        </div>
      </div>

      <div className="EvDet-attached">
        <button>Cancel My Place</button>
        <button color="teal">JOIN THIS EVENT</button>

        <Link to={`/manage/${event.id}`}>
          <button as={Link}>Manage Event</button>
        </Link>
      </div>
    </div>;
};

export default EventDetailedHeader;
