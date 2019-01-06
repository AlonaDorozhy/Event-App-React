import React from 'react';

import { connect } from 'react-redux'
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedSidebar from './EventDetailedSidebar';

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {};

  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0]
  }

  return {
    event
  }
}

const EventDetailedPage = ({event}) => {
  return (
  <div className='container'>
  <div className='row'>
      <div className="col-8">
          <EventDetailedHeader  event={event} />
        <EventDetailedInfo event={event} />
        <EventDetailedChat />
      </div> 
      <div className="col-4">
        <EventDetailedSidebar attendees={event.attendees}  />
      </div></div>
  </div>);
};

export default connect(mapState)(EventDetailedPage);
