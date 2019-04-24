import React, { Component } from "react";
import { Link } from "react-router-dom";

import { isAuthenticated } from "../auth";
import { findPeople, follow } from "./apiUser";
import DefaultProfile from "../images/avatar.jpg";

class FindPeople extends Component {
  constructor() {
    super();
    this.state ={
      users: [],
      error: "",
      open: false
    };
  }

  componentDidMount() {
    const userId = isAuthenticated().user._id;
    const token = isAuthenticated().token;
    
  }

  render() {
    return(
      <div className="container">
        <h2 className="mt-5 mb-5">Find People</h2>

      </div>
    );
  }
}

export default FindPeople;