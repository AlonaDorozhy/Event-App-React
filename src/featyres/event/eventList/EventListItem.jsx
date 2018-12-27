import React, { Component } from "react";

class EventListItem extends Component {
  render() {
    return (
      <div className="row">
        <div className="EvLiIt-block">
          <div className="EvLiIt-title">
            <h3>Event Tittle</h3>
            <h4>
              hosted by <a href="/">Name</a>
            </h4>
          </div>
          <div className="EvLiIt-date">
            <span>Date | </span>
            <span>time | </span>
            <span> location |</span>
          </div>

          <div className="EvLiIt-text">
            <p> some text</p>
          </div>
          <div className="EvLiIt-buttonrow">
            <button className="EvLiIt-button">View</button>
          </div>
        </div>
      </div>
    );
  }
}

export default EventListItem;
