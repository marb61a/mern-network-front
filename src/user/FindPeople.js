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
    
    findPeople(userId, token)
      .then(data => {
        if(data.error) {
          console.log(data.error);
        } else {
          this.setState({
            users: data
          });
        }
      });
  }

  clickFollow = (user, i) => {
    const userId = isAuthenticated().user._id;
    const token = isAuthenticated().token;

    follow(userId, token, user._id)
      .then(data => {
        if(data.error) {
          this.setState({
            error: data.error
          });
        } else {
          let toFollow = this.state.users;
          toFollow.splice(i, 1);
          this.setState({
            users: toFollow,
            open: true,
            followMessage: `Following ${user.name}`
          });
        }
      })
  };

  render() {
    return(
      <div className="container">
        <h2 className="mt-5 mb-5">Find People</h2>

      </div>
    );
  }
}

export default FindPeople;