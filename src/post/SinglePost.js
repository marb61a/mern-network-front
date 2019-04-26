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
    const postId = this.props.match.params.postId;

    singlePost(postId)
      .then(data => {
        if(data.error) {
          console.log(data.error);
        } else {
          this.setState({
            post: data
          });
        }
      })
  };

  renderPost = post => {
    return(
      <div className="card-body">
        <img 
          src={``}
          alt={post.title}
          className="img-thunbnail mb-3"
          style={{
            height: "300px",
            width: "100%",
            objectFit: "cover"
          }}
        />
        {

        }
        <p className="card-text">{post.body}</p>
        <br />
      </div>
    );
  };

  render() {
    const { post } = this.state;

    return(
      <div className="container">
        <h2 className="display-2 mt-5 mb-5">{post.title}</h2>
        {

        }
      </div>
    )
  }
}