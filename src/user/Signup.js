import React, { Component } from "react";
import { Link } from "react-router-dom";

import { signup } from "../auth";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
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
    const {name, email, password} = this.state;
    const user = {name, email, password};
    
  }

  signupForm = (name, email, password) => (
    <form>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          onChange={this.handleChange("name")}
          type="text"
          className="form-control"
          value={name}
        />
      </div>
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
        <label className="text-muted">Password</label>
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
    const { email, name, password, error } = this.state;

    return(
      <div className="container">
        <h2 className="mt-5 mb-5">Signup</h2>
        <hr />
        <div
          className="alert alert-danger"
          style={{display: error ? "" : "none" }}
        >
          {error}
        </div>
      </div>
    );
  }
}

export default Signup;