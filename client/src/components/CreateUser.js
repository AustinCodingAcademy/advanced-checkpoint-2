import React, { Component } from "react";

class CreateUser extends Component {
  constructor() {
    super();
    this.state = {
      name:"",
      age:0,
      gender:""
    }
  }
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <form onSubmit={(e) => {
            e.preventDefault();
            if(this.props.saveUser) {
              this.props.saveUser(this.state);
            }
          }}>
          <div>
          Name: <input onChange={(e) => {
              this.setState({
                name: e.target.value
              });
            }} />
          Age: <input onChange={(e) => {
              this.setState({
                age: e.target.value
              });
            }} />
          Gender: <input onChange={(e) => {
              this.setState({
                gender: e.target.value
              });
            }} />
          </div>
        <button> Create User</button>
        </form>
      </div>
    );
  }
}
export default (CreateUser);
