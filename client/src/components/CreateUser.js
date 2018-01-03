import React, { Component } from "react";
import { createUser } from "../actions";

class CreateUser extends Component {
  constructor() {
    super();
    this.state = {
      name:"",
      age:0,
      gender:"",
      birthday:"",
      nationality:""
    }
  }

  componentDidMount() {
  }
  render() {
    return (
      <div>
        <form onSubmit={(e) => {
            e.preventDefault();
            console.log(this.props);
            createUser(this.state);
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
          Birthday: <input onChange={(e) => {
              this.setState({
                birthday: e.target.value
              });
            }} />
          Nationality: <input onChange={(e) => {
              this.setState({
              nationality: e.target.value
              });
            }} />
          </div>
        <button type="submit" >Create User</button>
        </form>
      </div>
    );
  }
}
export default CreateUser;
