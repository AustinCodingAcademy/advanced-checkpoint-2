import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Users extends Component {
  handleDeleteBtn(user) {
    console.log(user);
    if (this.props.deleteUser) {
      this.props.deleteUser(user._id);
    }
  }

  render() {
    const usersDiv = this.props.users.map(user => {
      return (
        <div key={user._id}>
          <h1>{user.title}</h1>
          <Link to={'/user/' + user._id}>
            <p>view_list</p>
          </Link>
          <button
            type="submit"
            name="action"
            onClick={() => this.handleDeleteBtn(user)}
          >
            Delete
            <p>cancel</p>
          </button>
        </div>
      );
    });
    return <div>{usersDiv}</div>;
  }
}
export default Users;
