import React, { Component } from 'react';

class EventListAttendee extends Component {
    render() {
        const {attendee} = this.props;
        return (
            <div>
                <img alt='avatar' className='EvLiAtt-avatar' src={attendee.photoURL} />
            </div>
        )
    }
}
export default EventListAttendee;
