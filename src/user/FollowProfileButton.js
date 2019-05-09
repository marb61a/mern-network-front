import React, { Component } from "react";

import { follow, unfollow } from "./apiUser";

class FollowProfileButton extends Component {
  followClick = () => {
    this.props.onButtonClick(follow);
  };

  unfollowClick = () => {
    this.props.onButtonClick(unfollow);
  };

  render() {
    return (
      <div className="d-inline-block">
        {
          !this.props.following ? (
            <button
            
            >
              Follow
            </button>
          ) : (
            <button>
              Unfollow
            </button>
          )
        }
      </div>
    );
  }
}

export default FollowProfileButton;