import React, { Component } from "react";
import { Button, Grid, Row, Col } from "react-bootstrap";
import  NavBar from '../../featyres/navigation/navBar/navBar'
class App extends Component {
  render() {
    return <Grid fluid className ='header'>
      <Row className ='NavHead'  >
        
            <NavBar />
         
        </Row>
      </Grid>;
  }
}

export default App;
