import React, { Component } from "react";
import { isAuthenticated } from "../auth";

class EditProfile extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      name: "",
      email: "",
      password: "",
    }
  }

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