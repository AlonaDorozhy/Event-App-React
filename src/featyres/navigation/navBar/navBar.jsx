import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
class NavBar extends Component {
  render() {
    return <div className="col-md-12 ">
        <nav className=" NavHead d-flex align-items-center ">
          <div className=" col-md-3 ">
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
              <Link to="/createEvent" className="btn navLink btnLink">
                Create Event
              </Link>
            
            </ul>
          </div>

          <button className="btn navLink btnLink " type="button">
            Login
          </button>
          <button className="btn navLink btnLink " type="button">
            Sign Out
          </button>
        </nav>
      </div>;
  }
}

export default NavBar;
