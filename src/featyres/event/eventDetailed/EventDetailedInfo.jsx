import React from 'react';


const EventDetailedInfo = ({event}) => {
  return <div className="row EvDet-Header">
      <div className="col-1">fontAw</div>
      <div className="col-11">
        <p>{event.description}</p>
      </div>
      <div className="col-1">fontAw</div>
      <div className="col-11">
        <p>{event.date}</p>
      </div>
      <div className="col-1">fontAw</div>
      <div className="col-8">
        <p>{event.venue}</p>
      </div>
      <div className="col-3">
        <button color="teal" size="tiny" content="Show Map">
          Show Map
        </button>
      </div>
    </div>;
};

export default EventDetailedInfo;
