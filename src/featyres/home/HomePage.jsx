import React from "react";

const HomePage = ({ history }) => {
  return (
  <div className="container-fluid HomePage">
          <div className=" container">
            <h2 className="TextHomePage">Do whatever you want to do</h2>
          <div onClick={() => history.push('/events')} className=" btn navLink btnLink">
              Get Started
              <i className="right arrow icon" />
            </div>
          </div>
       
    </div>
    );
};

export default HomePage;
