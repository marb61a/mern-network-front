import React from "react";
import { Link, withRouter } from "react-router-dom";

const Menu = () => (
  <div>
    <ul className="nav nav-tabs bg-primary">
      <li className="nav-item">
        <Link>
          Home
        </Link>
      </li>
      <li className="nav-item">
      
      </li>
    </ul>
  </div>
);

export default withRouter(Menu);