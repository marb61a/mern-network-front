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

  handleChange = name => event => {
    this.setState({
      error: ""
    });

  };

  editPostForm = (title, body) => (
    <form>
      <div className="form-group">
        <label className="text-muted">Title</label>
        <input 
          onChange={this.handleChange("title")}
          type="text"
          className="form-control"
          value={title}
        />
      </div>
    </form>
  );

  render() {
    const {
      id, 
      title,
      body,
      error
    } = this.state;

    return(
      <div className="container">
        <h2 className="mt-5 mb-5">{title}</h2>
        <div
          className="alert alert-danger"
          style={{ display: error ? "" : "none" }}
        >
          {error}
        </div>
      </div>
    );
  }
}

export default EditPost;