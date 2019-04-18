import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import { signin, authenticate } from "../auth";

class Signin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      error: "",
    };
  }

  signinForm = (email, password) => (
    <form>
      <div className="form-group">
      
      </div>
    </form>
  );

  render() {
    const { email, password, error } = this.state;

    return(
      <div className="container">
        <h2 className="mt-5 mb-5">SignIn</h2>
        <hr />

      </div>
    );
  }
}

export default Signin;