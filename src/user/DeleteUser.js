import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { isAuthenticated } from "../auth";
import { remove } from "./apiUser";
import { signout } from "../auth";

class DeleteUser extends Component {
  state = {
    redirect: false
  };

  deleteAccount = () => {
    const token = isAuthenticated().token;
    const userId = this.props.userId;

  };

  render() {
    return (
      <button>
        Delete Profile
      </button>
    );
  }
}

export default DeleteUser;