import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "../../featyres/navigation/navBar/navBar";
import EventDashboard from "../../featyres/event/eventDashboard/EventDashboard";
import EventForm from "../../featyres/event/eventForm/EventForm";
import SettingsDashboard from "../../featyres/user/settings/SettingsDashboard";
import UserDetailedPage from "../../featyres/user/userDetailed/UserDetailedPage";
import PeopleDashboard from "../../featyres/user/peopleDashboard/PeopleDashboard";
import EventDetailedPage from "../../featyres/event/eventDetailed/EventDetailedPage";
import HomePage from "../../featyres/home/HomePage";
import Test from '../../featyres/testarea/TestComponent'
class App extends Component {
  render() {
    return <div className="container-fluid header">
        <div className="row NavHead">
          <NavBar />
        </div>

        <div className="row">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/test" component={Test} />
          <Route path="/events" component={EventDashboard} />
            <Route path="/event/:id" component={EventDetailedPage} />
            <Route path="/people" component={PeopleDashboard} />
            <Route path="/profile/:id" component={UserDetailedPage} />
            <Route path="/settings" component={SettingsDashboard} />
            <Route path="/createEvent" component={EventForm} />
          </Switch>
        </div>
      </div>;
  }
}

export default App;
