import React, { Component } from "react";

class NewMovie extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      actor: "",
      year: 0,
      awards: "",
      runtime: ""
    };
  }
  componentDidMount() {
  }
  render() {
    return (
      <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        if (this.props.makeMovie) {
          this.props.makeMovie(this.state)
        }
      }}>
      Name: <input onChange={(e) => {
          this.setState({
            name: e.target.value
          });
        }} />
        <div></div>
      Actor: <input onChange={(e) => {
          this.setState({
            name: e.target.value
          });
        }} />
      <div></div>
      Year: <input onChange={(e) => {
          this.setState({
            name: e.target.value
          });
        }} />
      <div></div>
      Awards: <input onChange={(e) => {
          this.setState({
            name: e.target.value
          });
        }} />
      <div></div>
      Runtime: <input onChange={(e) => {
          this.setState({
            name: e.target.value
          });
        }} />
      <div></div>
      <button>Submit</button>
      </form>
      </div>
    );
  }
}
export default (NewMovie);
