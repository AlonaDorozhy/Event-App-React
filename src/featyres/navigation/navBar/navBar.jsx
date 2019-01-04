import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import SignedOutMenu from "../menus/SignedOutMenu";
import SignedInMenu from "../menus/SignedInMenu";
class NavBar extends Component {
  state = {
    authenticated: false
  };
  handleSignIn = () => {
    this.setState({
      authenticated: true
    });
  };
  handleSignOut = () => {
    this.setState({
      authenticated: false
    });
    this.props.history.push('/')
  };
  render() {
    const { authenticated } = this.state;
    return (
      <div className="col-md-12 ">
        <nav className=" NavHead d-flex align-items-center ">
          <div className=" col-md-2 ">
            <a className="navbarLogo" href="/">
              <img alt="logo" src={require("../../../img/logo.png")} />
            </a>
          </div>

          <div className=" col-md-6 nav-centr ">
            <ul className="  ">
              <li className="navbar-nav ">
                <a as={Link} to="/" className="navLink" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="navbar-nav ">
                <a as={NavLink} to="/events" className="navLink" href="/events">
                  Events
                </a>
              </li>
              <li className="navbar-nav ">
                <a as={NavLink} to="/people" className="navLink" href="/people">
                  People
                </a>
              </li>
              <li className="navbar-nav ">
                <a as={NavLink} to="/test" className="navLink" href="/test">
                 Test
                </a>
              </li>
           
              <Link to="/createEvent" className="btn navLink btnLink">
                Create Event
              </Link>
            </ul>
          </div>
          <div >
          {authenticated ? (
            <SignedInMenu signOut={this.handleSignOut} />
          ) : (
            <SignedOutMenu signIn={this.handleSignIn} />
          )}</div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
