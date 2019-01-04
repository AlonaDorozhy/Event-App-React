import React from "react";
import { NavLink } from "react-router-dom";;
const SettingsNav = () => {
  return <div className="col-4">
      <div className="Settings_block">
        <div className="Settings_head">Profile</div>
        <div className="Settings_all">
          <NavLink to="/settings/basic">Basics</NavLink>
        </div>
        <div className="Settings_all">
          <NavLink to="/settings/about">About me</NavLink>
        </div>
        <div className="Settings_all">
          <NavLink to="/settings/photos">My photos</NavLink>
        </div>
      </div>
      <div className="Settings_block">
        <div className="Settings_head">
          Account
        </div>
        <div className="Settings_all">
          <NavLink to="/settings/account">My Account</NavLink>
        </div>
      </div>
    </div>;
};

export default SettingsNav;
