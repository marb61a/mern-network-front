import React, { Component } from "react";
import { resetPassword } from "../auth";

class ResetPassword extends Component {
  constructor() {
    super();
    this.state = {
      newPassword: "",
      message: "",
      error: ""
    };
  }

  resetPassword = e => {
    e.preventDefault();
    this.setState({
      message: "",
      error: ""
    });
  };

  render() {
    return(
      <div className="container">
        <h2 className="mt-5 mb-5">Reset your Password</h2>
        {

        }
      </div>
    );
  }
}

export default ResetPassword;