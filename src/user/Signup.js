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
    }
  }

  handleChange = name => event => {
    this.setState({
      error: ""
    });

    this.setState({ 
      [name]: event.target.value 
    });
  }; 

  signupForm = (name, email, password) => (
    <form>
      <div className="form-group">
        <input
          onChange={this.handleChange("name")}
          type="text"
          className="form-control"
          value={name}
        />
      </div>
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