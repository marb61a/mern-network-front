import React, { Component } from "react";
import { Link } from "react-router-dom";
import DefaultProfile from "../images/avatar.jpg";

import { comment, uncomment } from "./apiPost";
import { isAuthenticated } from "../auth";

class Comment extends Component {
  state = {
    text: "",
    error: ""
  };

  handleChange = event => {
    this.setState({ 
      error: "" 
    });
    this.setState({ 
      text: event.target.value 
    });
  };

  render() {
    const { error } = this.state;

    return(
      <div>
        <h2 className="mt-5 mb-5">Leave a comment</h2>
        <form>
        
        </form>
      </div>
    );
  }
}

export default Comment;