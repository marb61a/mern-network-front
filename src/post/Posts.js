import React, { Component } from "react";
import DefaultPost from "../images/mountains.jpg";
import { Link } from "react-router-dom";

import { list } from "./apiPost";

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      page: 1
    };
  }

  loadPosts = page => {
    list(page)
      .then()
  };

  render() {
    const { posts, page } = this.state;
    
    return(
      <div className="container">
      
      </div>
    );
  }
}

export default Posts;