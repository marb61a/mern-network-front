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

    forgotPassword(this.state.email)
      .then(data => {
        if(data.error) {
          console.log(data.error);
          this.setState({
            error: data.error
          });
        } else {
          console.log(data.message);
          this.setState({ 
            message: data.message 
          });
        }
      });
  };

  render() {
    return(
      <div className="container">
        <h2 className="mt-5 mb-5">Ask for Password Reset</h2>

      </div>
    );
  }
}

export default ForgotPassword;