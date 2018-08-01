import React, { Component } from "react";
import Header from "./Header";

class EditRobot extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    // this.state = {
      // robot: {
      //   id: "",
      //   name: "",
      //   movie: "",
      //   friends: "",
      //   enemies: "",
      //   movement: "",
      //   notes: "",
      // }
    // }
  }

  handleChange(e) {
    const robot = {name: e.target.value};
    this.setState({
      robot: Object.assign(this.state.robot,robot)
    });
  }

  componentDidMount() {
    if (this.props.match) {
      var robotId = this.props.match.params.id;
      this.props.fetchRobot(robotId);
      // console.log(this.state.robot);
    }
  }



  render() {
    console.log(this.props);

    return (
      <div>
        <Header />
        <div style={{padding: '2%'}}>
          <h1>Edit Robot</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            console.log('form submitted');
            // console.log(this.props);
            if (this.props.createRobot) {
              this.props.createRobot(this.state.robot);
            }
          }}>
            <table className="robotTable createRobotTable">
              <tbody>
                <tr>
                  <td>Name: {this.props.robot.name}</td>
                  <td>
                    <input onChange={(e) => {
                      const robot = {name: e.target.value};
                      this.setState({
                        robot: Object.assign(this.state.robot,robot)
                      });
                    }} />
                  </td>
                </tr>
                <tr>
                  <td>Movie: </td>
                  <td>
                    <input onChange={(e) => {
                      const robot = {movie: e.target.value};
                      this.setState({
                        robot: Object.assign(this.state.robot,robot)
                      });
                    }} />
                  </td>
                </tr>
                <tr>
                  <td>Friends: </td>
                  <td>
                    <input onChange={(e) => {
                      const robot = {friends: e.target.value};
                      this.setState({
                        robot: Object.assign(this.state.robot,robot)
                      });
                    }} />
                  </td>
                </tr>
                <tr>
                  <td>Enemies: </td>
                  <td>
                    <input onChange={(e) => {
                      const robot = {enemies: e.target.value};
                      this.setState({
                        robot: Object.assign(this.state.robot,robot)
                      });
                    }} />
                  </td>
                </tr>
                <tr>
                  <td>Movement: </td>
                  <td>
                    <input onChange={(e) => {
                      const robot = {movement: e.target.value};
                      this.setState({
                        robot: Object.assign(this.state.robot,robot)
                      });
                    }} />
                  </td>
                </tr>
                <tr>
                  <td>Notes: </td>
                  <td>
                    <input onChange={(e) => {
                      const robot = {notes: e.target.value};
                      this.setState({
                        robot: Object.assign(this.state.robot,robot)
                      });
                    }} />
                  </td>
                </tr>
              </tbody>
            </table>
            <button>Create</button>
          </form>
        </div>       
      </div>
    );
  }
}

export default EditRobot;