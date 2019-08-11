import React, { Component } from 'react';

class User extends Component {
  componentDidMount() {
    const myId = this.props.match.params.id;
    this.props.getUser(myId);
  }
  render() {
    return (
      <div>
        <div>Name: {this.props.user.name}</div>
        <div>Age: {this.props.user.age}</div>
        <div>Sex: {this.props.user.sex}</div>
        <div>Job: {this.props.user.job}</div>
        <div>Married: {this.props.user.married}</div>
      </div>
    );
  }
}
export default User;
