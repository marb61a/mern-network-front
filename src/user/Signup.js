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

  render() {
    return(
      <div className="container">
        <h2 className="mt-5 mb-5">Signup</h2>
        
      </div>
    );
  }
}

export default Signup;