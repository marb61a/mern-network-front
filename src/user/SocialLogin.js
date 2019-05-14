import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import GoogleLogin from "react-google-login";

import { socialLogin, authenticate } from "../auth";

class SocialLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      redirectToReferrer: false
    };
  }

  responseGoogle = response => {
    const { googleId, name, email, imageUrl } = response.profileObj;
    const user = {
      password: googleId,
      name: name,
      email: email,
      imageUrl: imageUrl
    };

  };

  render() {
    return(
      <div>#</div>
    );
  }
}

export default SocialLogin;