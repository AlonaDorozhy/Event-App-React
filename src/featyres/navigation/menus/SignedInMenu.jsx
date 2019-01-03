import React from "react";
import UNUser from '../../../img/user.png'

// import { Link } from "react-router-dom";

const SignedInMenu = ({ signOut }) => {
  return <div className="btn-group">
      <button type="button" className="btn  dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <img className="UNUser" src={UNUser} alt={"Unknown user"} />
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="/">
          Create Event
        </a>
        <a className="dropdown-item" href="/">
          My Events
        </a>
        <a className="dropdown-item" href="/">
          My Network
        </a>
        <a className="dropdown-item" href="/">
          My Profile
        </a>
        <a className="dropdown-item" href="/">
          Settings
        </a>
        
        <div className="dropdown-divider" />
        <a onClick={signOut} className="dropdown-item" href="/">
          Sign Out
        </a>
      </div>
    </div>;
};

export default SignedInMenu;
