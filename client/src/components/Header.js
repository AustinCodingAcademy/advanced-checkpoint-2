import React from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/fontawesome-free-solid';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className="site-header">
      <h1><Link to="/" onClick={(e) => {e.currentTarget.blur()}}><img src="http://localhost:3101/logo.png" alt="Spork Logo" /></Link></h1>

      <nav className="menu">
        <Link className="small button" to="/add"><FontAwesomeIcon icon={faPlus} />Add New Recipe</Link>
        <Link className="small button" to="/delete"><FontAwesomeIcon icon={faMinus} />Delete Recipe</Link>
      </nav>

      {props.location}
    </header>
  );
}

export default Header;