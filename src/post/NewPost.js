import React, { Component } from "react";
import { isAuthenticated } from "../auth";
import { create } from "./apiPost";
import { Redirect } from "react-router-dom";

class NewPost extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: "",
      error: "",
      user: ""
    };
  }

  componentDidMount() {

  }

  newPostForm = (title, body) => (
    <form>
    
    </form>
  );

  render(){
    return(
      <div className="container">
        <h2 className="mt-5 mb-5">Create a new post</h2>
        <div>
        
        </div>
      </div>
    );
  }
}

export default NewPost;