import React, { Component } from "react";
import { Grid, Row, } from "react-bootstrap";
import  NavBar from '../../featyres/navigation/navBar/navBar'
import EventDashboard from '../../featyres/event/eventDashboard/EventDashboard'
class App extends Component {
  render() {
    return <Grid fluid className ='header'>
      <Row className ='NavHead'  >
            <NavBar />
        </Row>
        <EventDashboard />
        
      </Grid>;
  }
}

export default App;
