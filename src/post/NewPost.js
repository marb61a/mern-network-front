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

  handleChange = name => event => {
    this.setState({
      error: ""
    });
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    const fileSize = name === "photo" ? event.target.files[0].size : 0;
    this.postData.set(name, value);
    this.setState({ 
      [name]: value, 
      fileSize 
    });
  };

  newPostForm = (title, body) => (
    <form>
      <div className="form-group">
        <label className="text-muted">Post Photo</label>
        <input 
        
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Title</label>
        <input 
        
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Body</label>
        <input 
        
        />
      </div>
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