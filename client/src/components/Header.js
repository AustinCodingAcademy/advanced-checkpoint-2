import React from "react";
import { NavLink } from "react-router-dom";

function Header(props){
  return (
    <div className="header">
      <h1>Pop-culture Robots</h1>
      <div className="nav">
        <NavLink to="/robots" activeClassName="current">List</NavLink>
        <NavLink to="/create" activeClassName="current">Create</NavLink>
      </div>
    </div>
  )
}

export default Header;