import React from "react";
import { Link, withRouter } from "react-router-dom";

const isActive = (history, path) => {
  if(history.location.pathname === path) {
    return {color: "ff9900"};
  } else {
    return { color: "#ffffff" };
  }
};

const Menu = ({history}) => (
  <div>
    <ul className="nav nav-tabs bg-primary">
      <li className="nav-item">
        <Link
          className="nav-link"
          style={isActive(history, "/")}
          to="/"
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link"
          style={isActive(history, "/users")}
          to="/users"
        >
          Users
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to={`/post/create`}
          style={isActive(history, `/post/create`)}
          className="nav-link"
        >
          Create Post
        </Link>
      </li>
      {
        !isAuthenticated() && (
          <>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={isActive(history, "/signin")}
                to="/signin"
              >
                Sign In
              </Link>
            </li>
          </>
        )
      }
    </ul>
  </div>
);

export default withRouter(Menu);