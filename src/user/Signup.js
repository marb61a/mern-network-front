import React, { Component } from "react";
import { Link } from "react-router-dom";

import { signup } from "../auth";
import SocialLogin from "./SocialLogin";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      error: "",
      open: false,
      recaptcha: false
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

  recaptchaHandler = e => {
    this.setState({
      error: ""
    });
    let userDay = e.target.value.toLowerCase();
    let dayCount;

    if(userDay === 'sunday') {
      dayCount = 0;
    } else if(userDay === 'monday') {
      dayCount = 1;
    } else if(userDay === 'tuesday') {
      dayCount = 2;
    } else if (userDay === "wednesday") {
      dayCount = 3;
    } else if (userDay === "thursday") {
      dayCount = 4;
    } else if (userDay === "friday") {
      dayCount = 5;
    } else if (userDay === "saturday") {
      dayCount = 6;
    }

    if (dayCount === new Date().getDay()) {
      this.setState({
        recaptcha: true
      });
    }
  }

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