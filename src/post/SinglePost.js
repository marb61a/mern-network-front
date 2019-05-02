import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import { singlePost, remove, like, unlike } from "./apiPost";
import DefaultPost from "../images/mountains.jpg";
import { isAuthenticated } from "../auth";

class SinglePost extends Component {
  state = {
    post: "",
    redirectToHome: false,
    redirectToSignin: false,
    like: false,
    likes: 0,
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

  likeToggle = () => {
    if(!isAuthenticated()) {
      this.setState({
        redirectToSignin: true
      });

      return false;
    }

    let callApi = this.state.like ? unlike : like;
    const userId = isAuthenticated().user._id;
    const postId = this.state.post._id;
    const token = isAuthenticated().token;

    callApi(userId, token, postId)
      .then(data => {
        if(data.error) {
          console.log(data.error);
        } else {
          this.setState({
            like: !this.state.like,
            likes: data.likes.length
          });
        }
      });
  }

  deletePost = () => {
    const postId = this.props.match.params.postId;
    const token = isAuthenticated().token;

    remove(postId, token)
      .then(data => {
        if (data.error) {
          console.log(data.error);
        } else {
          this.setState({ 
            redirectToHome: true 
          });
        }
      });
  };

  deleteConfirmed = () => {
    let answer = window.confirm(
      "Are you sure you want to delete your post?"
    );

    if (answer) {
      this.deletePost();
    }
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

export default SinglePost;