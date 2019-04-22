import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

import { isAuthenticated } from "../auth";
import ProfileTabs from "./ProfileTabs";
import { read } from "./apiUser";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      error: "",
      redirectToSignin: false,
      posts: []

    };
  }

  init = userId => {
    const token = isAuthenticated().token;
    read(userId, token)
      .then(data => {
        if(data.error) {
          this.setState({ 
            redirectToSignin: true 
          });
        } else {
          this.setState({
            user: data,
          });
        }
      });
  };

  componentDidMount() {
    const userId = this.props.match.params.userId;
    this.init(userId);
  }

  render() {
    const {user, posts} = this.state;

    return(
      <div className="container">
        <h2 className="mt-5 mb-5">Profile</h2>
        <div className="row">
        
        </div>
      </div>
    )
  }
}

export default Profile;