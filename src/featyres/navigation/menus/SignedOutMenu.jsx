import React from "react";

const SignedOutMenu = ({ signIn }) => {
  return (
    <div>
      <button
        onClick={signIn}
        className="btn navLink btnLinkbtn navLink btnLink "
        type="button"
      >
        Login
      </button>

      <button className="btn navLink btnLink " type="button">
        Register
      </button>
    </div>
  );
};

export default SignedOutMenu;
