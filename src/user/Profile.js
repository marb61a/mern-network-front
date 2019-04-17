import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      error: "",
      posts: []

    };
  }

  componentWillMount() {
    
  }

  render() {
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