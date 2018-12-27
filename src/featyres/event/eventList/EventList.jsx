import React, { Component } from 'react';
import EventListItem from './EventListItem'

class EventList extends Component {
    render() {
        return <div>
           
            <h1>Eventv List</h1>
            <div className='col-md-10'>
            <EventListItem />
            <EventListItem />
            <EventListItem />
            <EventListItem />
                </div>
          </div>;
    }
}

export default EventList;