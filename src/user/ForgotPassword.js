import React, { Component } from "react";
import { forgotPassword } from "../auth";

class ForgotPassword extends Component {
  state = {
    email: "",
    message: "",
    error: ""
  };

  forgotPassword = e => {
    e.preventDefault();
    this.setState({
      message: "",
      error: ""
    });
  }

  render() {
    return(
      <div className="container">
        <h2 className="mt-5 mb-5">Ask for Password Reset</h2>

      </div>
    );
  }
}

export default ForgotPassword;