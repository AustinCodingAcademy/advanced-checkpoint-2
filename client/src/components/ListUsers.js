import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../App.css";

const style = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  h2: {
    width: "100%",
    textAlign: "center"
  },
  card: {
    display: "flex",
    backgroundColor: "#4e4e4e",
    width: "250px",
    borderRadius: "8px",
    justifyContent: "center",
    margin: "10px",
    boxShadow: "2px 2px 6px rgba(100,100,100,.4"
  },
  name: {
    width: "max-content",
    cursor: "pointer",
    
  },
  link: {
    hover: "red",
    textDecoration: "none",
    color: "white"
  },
  cancel: {
    fontSize: "20px",
    marginTop: "16px",
    marginLeft: "12px",
    color: "red", 
    cursor: "pointer"
  },
  icon: {
    fontSize: "30px",
    marginRight: "12px",
  }
};

const ListUsers = (props) => {

  const handleRemove = (e) => {
    props.deleteUser(e.target.id);
  };


  
  const handleShow = (e) => {
    props.showUser(e.target.id);
  };
  
  return (
    <div style={style.root}>
      <h1 style={style.h2}>USERS</h1>
      {props.users.map((user, index) => {
        return (
          <div key={index} className="users-list-card" style={style.card}>
            <Link to={"/user/" + user.id} style={style.link}> 
              <h3 style={style.name} className="user-name link" onClick={(e) => handleShow(e)} 
                id={user.id}>
                <i className="fas fa-user link" style={style.icon} />
                {user.first_name} {user.last_name}  
              </h3> 
            </Link>
            <i className="fas fa-times" style={style.cancel} 
              onClick={(e) => handleRemove(e)} id={user.id} />
          </div>
        );
      })}
    </div>
  );
};

ListUsers.propTypes = {
  users: PropTypes.array,
};

export default ListUsers;
