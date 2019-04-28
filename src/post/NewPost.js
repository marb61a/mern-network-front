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
      user: "",
      loading: false
    };
  }

  componentDidMount() {
    this.postData = new FormData();
    this.setState({
      user: isAuthenticated().user
    });
  }

  isValid = () => {
    const { title, body, fileSize } = this.state;

    if(fileSize > 100000) {
      this.setState({
        error: "File size should be less than 100kb",
        loading: false
      });

      return false;
    }

    if (title.length === 0 || body.length === 0) {
      this.setState({ 
        error: "All fields are required", 
        loading: false 
      });
      return false;
    }

    return true;
  };

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