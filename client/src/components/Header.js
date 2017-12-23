import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <div className="nav-wrapper deep-purple">
        <Link to="/" className="brand-logo right">
          My Game List
        </Link>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            {" "}
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            {" "}
            <Link to="/games">Games</Link>
          </li>
          <li>
            <Link to="/creategame">Create New Games</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
