import React, { Component } from "react";
import { Link } from "react-router-dom";
import DefaultProfile from "../images/avatar.jpg";

class ProfileTabs extends Component {
  const { posts } = this.props;
  
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <h3 className="text-primary">
            {followers.length} Followers
          </h3>
          <hr />
          {
            followers.map((person, i) => (
              <div key={i}>
                <div>
                  <Link to={`/user/${person._id}`}>
                    <img 
                      style={{
                        borderRadius: "50%",
                        border: "1px solid black"
                      }}
                      className="float-left mr-2"
                      height="30px"
                      width="30px"
                    />
                  </Link>
                </div>
              </div>
            ))
          }
        </div>
        <div className="col-md-4">
        
        </div>
        <div className="col-md-4">
        
        </div>
      </div>
    </div>
  );
};

export default ProfileTabs;