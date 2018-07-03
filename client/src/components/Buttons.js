import React from 'react';
import {Link} from "react-router-dom";

function Buttons(props) {
  
    return (
        <div>
        <p>
        <Link to="/"><button>Home</button></Link>
        <Link to="/users"><button>List of Users</button></Link>
        <Link to="/create"><button>Create New User</button></Link>
        </p>
        </div>
    );
  }

 
export default Buttons;