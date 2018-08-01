import React from "react";
import Header from "./Header";

class CreateRobot extends React.Component {
  constructor() {
    super();
    this.state = {
      robot: {
        name: "",
        movie: "",
        friends: "",
        enemies: "",
        movement: "",
        notes: ""
      }
    };
  }
  render() {
    return (
      <div>
        <Header />
        <div style={{padding: '2%'}}>
          <h1>Create Robot</h1>
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
                  <td>Name: </td>
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
export default CreateRobot;
