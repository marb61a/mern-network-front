import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

import { isAuthenticated } from "../auth";
import ProfileTabs from "./ProfileTabs";
import { listByUser } from "../post/apiPost";
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

  loadPosts = userId => {
    const token = isAuthenticated().token;

    listByUser(userId, token) 
      .then(data => {
        if(data.error) {
          console.log(data.error);
        } else {
          this.setState({ 
            posts: data 
          });
        }
      })
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
          <div className="col-md-4">
            <img
              style={{ height: "200px", width: "auto" }}
              className="img-thumbnail"
              alt={user.name}
            />
          </div>
          <div className="col-md-8">
            <div className="lead mt-2">
              <p>Hello {user.name}</p>
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;