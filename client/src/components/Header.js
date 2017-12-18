import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <div>
        <Link to="/">User List</Link>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            {' '}
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/createuser">Create User</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
