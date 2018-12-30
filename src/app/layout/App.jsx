import React, { Component } from "react";
import { Grid, Row } from "react-bootstrap";
import { Route } from "react-router-dom";
import NavBar from "../../featyres/navigation/navBar/navBar";
import EventDashboard from "../../featyres/event/eventDashboard/EventDashboard";
import EventForm from "../../featyres/event/eventForm/EventForm";
import SettingsDashboard from "../../featyres/user/settings/SettingsDashboard";
import UserDetailedPage from "../../featyres/user/userDetailed/UserDetailedPage";
import PeopleDashboard from "../../featyres/user/peopleDashboard/PeopleDashboard";
import EventDetailedPage from "../../featyres/event/eventDetailed/EventDetailedPage";
import HomePage from "../../featyres/home/HomePage";
class App extends Component {
  render() {
    return <div className="container-fluid header">
        <Row className="NavHead">
         <NavBar />
         
        </Row>

      <Route exact path="/" component={HomePage} />
        <Route path="/events" component={EventDashboard} />
        <Route path="/event/:id" component={EventDetailedPage} />
        <Route path="/people" component={PeopleDashboard} />
        <Route path="/profile/:id" component={UserDetailedPage} />
        <Route path="/settings" component={SettingsDashboard} />
        <Route path="/createEvent" component={EventForm} />
      </div>;
  }
}

export default App;
