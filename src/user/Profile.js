import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

import { isAuthenticated } from "../auth";
import ProfileTabs from "./ProfileTabs";
import { read } from "./apiUser";
import DefaultProfile from "../images/avatar.jpg";
import DeleteUser from "./DeleteUser";
import FollowProfileButton from "./FollowProfileButton";
import { listByUser } from "../post/apiPost";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user: { following: [], followers: [] },
      redirectToSignin: false,
      following: false,
      error: "",
      posts: []
    };
  }

  checkFollow =  user => {
    const jwt = isAuthenticated();
    const match = user.followers.find(follower => {
      // One id has many other ids (followers) and vice versa
      return follower._id === jwt.user._id;
    });

    return match;
  };

  clickFollowButton = callApi => {
    const userId = isAuthenticated().user._id;
    const token = isAuthenticated().token;

    callApi(userId, token, this.state.user._id)
      .then(data => {
        if(data.error) {
          this.setState({
            error: data.error
          });
        } else {
          this.setState({
            user: data,
            following: !this.state.following
          });
        }
      });
  };

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

  componentWillReceiveProps(props) {
    const userId = props.match.params.userId;
    this.init(userId);
  }

  render() {
    const {redirectToSignin, user, posts} = this.state;
    if(redirectToSignin) {
      return <Redirect to="/signin" />;
    };
    
    const photoUrl = user._id ?
    `${process.env.REACT_APP_API_URL}/user/photo/${
     user._id }?${new Date().getTime()}`:
    DefaultProfile;

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