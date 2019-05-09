import React, { Component } from "react";
import { isAuthenticated } from "../auth";
import { Redirect } from "react-router-dom";

import Posts from "../post/Posts";
import Users from "../user/Users";

class Admin extends Component {
  state = {
    redirectToHome: false
  };

  render() {
    if (this.state.redirectToHome) {
      return <Redirect to="/" />;
    }

    return(
      <div>
        <div className="jumbotron">
          <h2>Admin Dashboard</h2>
          <p className="lead">Welcome to MERN Front</p>
        </div>
        
      </div>
    );
  }
}

export default Component;