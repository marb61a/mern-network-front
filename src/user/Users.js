import React, { Component } from "react";
import DefaultProfile from "../images/avatar.jpg";
import { Link } from "react-router-dom";

import { list } from "./apiUser";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    
  }

  renderUsers = users => (
    <div className="row">
      {
        
      }
    </div>
  );

  render() {
    const { users } = this.state;

    return(
      <div className="container">
      
      </div>
    );
  }
}

export default Users;