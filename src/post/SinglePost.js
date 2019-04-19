import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import { singlePost } from "./apiPost";
import DefaultPost from "../images/mountains.jpg";
import { isAuthenticated } from "../auth";

class SinglePost extends Component {
  state = {
    post: "",
    comment: []
  };

  componentDidMount = () => {

  };

  renderPost = post => {
    return(
      <div className="card-body">
    
      </div>
    );
  };

  render() {
    return(
      <div className="container">
      
      </div>
    )
  }
}