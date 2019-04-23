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
      .then(data => {
        if(data.error) {
          console.log(data.error);
        } else {
          this.setState({
            posts: data
          });
        }
      });
  };

  componentDidMount() {
    this.loadPosts(this.state.page);
}

loadMore = number => {
    this.setState({ 
      page: this.state.page + number 
    });
    this.loadPosts(this.state.page + number);
};

loadLess = number => {
    this.setState({ 
      page: this.state.page - number 
    });
    this.loadPosts(this.state.page - number);
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