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
      redirectToProfile: false,
      error: "",
      fileSize: 0,
      loading: false
    };
  }

  init = postId => {
    singlePost(postId)
      .then(data => {
        if(data.error) {
          this.setState({
            redirectToProfile: true
          });
        } else {
          this.setState({
            id: data.postedBy._id,
            title: data.title,
            body: data.body,
            error: ""
          });
        }
      });
  };

  componentDidMount() {
    this.postData = new FormData();
    const postId = this.props.match.params.postId;
    this.init(postId);
  }

  handleChange = name => event => {
    this.setState({
      error: ""
    });

    const value = name === "photo" ? 
      event.target.files[0] : 
      event.target.value;

    const fileSize = name === "photo" ? event.target.files[0].size : 0;
    this.postData.set(name, value);
    this.setState({ [name]: value, fileSize });
  };

  clickSubmit = event => {
    event.preventDefault();
    this.setState({
      loading: true
    });

    if(this.isValid()) {
      const postId = this.props.match.params.postId;
      const token = isAuthenticated().token;

      update(postId, token, this.postData)
        .then(data => {
          if(data.error) {
            this.setState({
              error: data.error
            });
          } else {
            this.setState({
              loading: false,
              title: "",
              body: "",
              redirectToProfile: true
            });
          }
        })
    }
  };

  editPostForm = (title, body) => (
    <form>
      <div className="form-group">
        <label className="text-muted">Post Photo</label>
        <input
          onChange={this.handleChange("photo")}
          type="file"
          accept="image/*"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Title</label>
        <input 
          onChange={this.handleChange("title")}
          type="text"
          className="form-control"
          value={title}
        />
      </div>
      <div className="form-group">
      
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