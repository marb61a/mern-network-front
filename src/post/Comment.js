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

  isValid = () => {
    const { text } = this.state;
    if (!text.length > 0 || text.length > 150) {
      this.setState({
        error: "Comment should not be empty and less than 150 characters long"
      });

      return false;
    }

    return true;
  };

  addComment = e => {
    e.preventDefault();
    if(!isAuthenticated()) {
      this.setState({ 
        error: "Please signin to leave a comment" 
      });

      return false;
    }

    if (this.isValid()) {

    }
  };

  render() {
    const { comments } = this.props;
    const { error } = this.state;

    return(
      <div>
        <h2 className="mt-5 mb-5">Leave a comment</h2>
        <form onSubmit={this.addComment}>
          <div className="form-group">
            <input 
              type="text"
              onChange={this.handleChange}
              value={this.state.text}
              className="form-control"
              placeholder="Leave a comment..."
            />
            <button className="btn btn-raised btn-success mt-2">
              Post
            </button>
          </div>
        </form>
        <div
          className="alert alert-danger"
          style={{ display: error ? "" : "none" }}
        >
          {error}
        </div>
        <div className="col-md-12">
          <h3>{}</h3>
          <hr />
          
        </div>
      </div>
    );
  }
}

export default Comment;