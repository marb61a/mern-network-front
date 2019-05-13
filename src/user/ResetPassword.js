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

    resetPassword({
      newPassword: this.state.newPassword,
      resetPasswordLink: this.props.match.params.resetPasswordToken
    })
      .then(data => {
        if(data.error) {
          console.log(data.error);
          this.setState({
            error: data.error,
            newPassword: ""
          });
        } else {
          console.log(data.message);
          this.setState({
            message: data.message,
            newPassword: ""
          });
        }
      });
  };

  render() {
    return(
      <div className="container">
        <h2 className="mt-5 mb-5">Reset your Password</h2>
        {
          this.state.message && (
            <h4 className="bg-success">
              {this.state.message}
            </h4>
          )
        }
      </div>
    );
  }
}

export default ResetPassword;