import React from "react";
import SettingsNav from "./SettingsNav";
import { Switch, Route, Redirect } from "react-router-dom";

import AboutPage from "./AboutPage";
import PhotosPage from "./PhotosPage";
import AccountPage from "./AccountPage";
import BasicPage from "./BasicPage";
const SettingsDashboard = () => {
  return( 
    <div className ='container'>
  <div className="row">
      {" "}
      
      <div className="col-8">
      <Switch>
        <Redirect exact from="/settings" to="/settings/basic" />
        <Route path="/settings/basic" component={BasicPage} />
        <Route path="/settings/about" component={AboutPage} />
        <Route path="/settings/photos" component={PhotosPage} />
        <Route path="/settings/account" component={AccountPage} />
      </Switch>
      </div>
      <SettingsNav />
    </div></div>);
};

export default SettingsDashboard;
