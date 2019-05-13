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
        {
          this.state.error && (
            <h4 className="bg-warning">
              {this.state.warning}
            </h4>
          )
        }
        <form
          style={{display: this.state.message.length ? "none" : ""}}
        >
          <div>
            <input 
              type="password"
              className="form-control"
              placeholder="Your new password"
              value={this.state.newPassword}
              name="newPassword"
              onChange={e => 
                this.setState({
                  newPassword: e.target.value,
                  message: "",
                  error: ""
                })
              }
              autofocus
            />
          </div>
          <button
            onClick={this.resetPassword}
            className="btn " 
          >
            Reset Password
          </button>
        </form>
      </div>
    );
  }
}

export default ResetPassword;