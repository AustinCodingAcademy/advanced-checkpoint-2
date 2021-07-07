import React, { Component } from "react";
import PropTypes from "prop-types";
import "../App.css";
import { Link } from "react-router-dom";

class UpdateUser extends Component {
  constructor(props) {
    super(props);
    const userId = this.props.match.params.id;
    const user = this.props.users.find(u => u.id == userId) || {};
    this.state = {
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
      gender: user.gender,
      id: this.props.match.params.id,
      ip: user.ip_address
    };
    
  }

  handleChange = (e) => {
    this.setState({[e.currentTarget.id]: e.currentTarget.value});
  }

  handleSubmit = () => {
    this.props.updateUser(this.state.id, {
      id: this.state.id,
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.email,
      gender: this.state.gender,
      ip_address: this.state.ip
    });
  }

  render() {
    return (
      <div className="create-user">
        <div className="heading-div">
          <h1 className="h2">UPDATE USER</h1>
        </div>
        <div className="create-user-main">
          {/* <form action=""> */}
        
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" value={this.state.firstName} 
            onChange={(e) => this.handleChange(e)} />
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" value={this.state.lastName} 
            onChange={(e) => this.handleChange(e)} />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={this.state.email} 
            onChange={(e) => this.handleChange(e)} />
          <label htmlFor="gender">Gender</label>
          <select id="gender" value={this.state.gender} onChange={(e) => this.handleChange(e)} >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <Link to={"/"}> 
            <button id="submit" onClick={this.handleSubmit}>Submit</button>
          </Link>
          {/* </form> */}
        </div>
      </div>
    );
  }
}

UpdateUser.propTypes = {
  users: PropTypes.array,
  updateUser: PropTypes.func,
  match: PropTypes.object

};

export default UpdateUser;
