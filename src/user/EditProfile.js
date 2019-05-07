import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import DefaultProfile from "../images/avatar.jpg";

import { isAuthenticated } from "../auth";
import { read, update, updateUser } from "./apiUser";
class EditProfile extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      name: "",
      email: "",
      password: "",
      redirectToProfile: false,
      error: "",
      fileSize: 0,
      loading: false,
      about: ""
    }
  }

  init = userId => {
    const token = isAuthenticated().token;

    read(userId, token)
      .then(data => {
        if(data.error) {
          this.setState({
            redirectToProfile: true
          });
        } else {
          this.setState({
            id: data._id,
            name: data.name,
            email: data.email,
            error: "",
            about: data.about
          });
        }
      })
  };

  componentDidMount() {
    this.userData = new FormData();
    const userId = this.props.match.params.userId;
    this.init(userId);
  }

  isValid = () => {
    const { name, email, password, fileSize } = this.state;

    if(fileSize > 1000000) {
      this.setState({
        error: "File size should be less than 100kb",
        loading: false
      });

      return false;
    }

    if(name.length === 0) {
      this.setState({
        error: "Name is required", 
        loading: false
      });

      return false;
    }
    
  };

  signupForm = (name, email, password, about) => (
    <form>
      <div className="form-group">
      
      </div>
    </form>
  );

  render() {
    return(
      <div className="container">
        <h2 className="mt-5 mb-5">Edit Profile</h2>
        
      </div>
    );
  }
}

export default EditProfile;