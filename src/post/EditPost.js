import React, { Component } from "react";
import { singlePost, update } from "./apiPost";
import { isAuthenticated } from "../auth";
import { Redirect } from "react-router-dom";
import DefaultPost from "../images/mountains.jpg";

class EditPost extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      title: "",
      body: "",
      error: ""
    };
  }

  render() {
    const {
      id, 
      title,
      body
    } = this.state;

    return(
      <div className="container">
        <h2 className="mt-5 mb-5">{title}</h2>
        <div>
        
        </div>
      </div>
    );
  }
}

export default EditPost;