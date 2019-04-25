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

  handleChange = name => event => {
    this.setState({ 
      error: "" 
    });
    this.setState({ 
      [name]: event.target.value 
    });
  };

  clickSubmit = event => {
    event.preventDefault();
  };

  signinForm = (email, password) => (
    <form>
      <div className="form-group">
        <label className="text-muted">Email</label>
        <input 
          onChange={this.handleChange("email")}
          type="email"
          className="form-control"
          value={email}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Email</label>
        <input 
          onChange={this.handleChange("password")}
          type="password"
          className="form-control"
          value={password}
        />
      </div>

      <button
        onClick={this.clickSubmit}
        className="btn btn-raised btn-primary"
      >
        Submit
      </button>
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