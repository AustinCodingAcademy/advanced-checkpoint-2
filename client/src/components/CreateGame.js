import React, { Component } from "react";

class CreateGame extends Component {
  constructor() {
    super();
    this.state = {
      name:"",
      players:"",
      type:"",
      playtime:""
    }
  }
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          if (this.props.saveGame) {
            this.props.saveGame(this.state);
          }
        }}>
          <div>
              Name: <input onChange={(e) => {
                this.setState({
                  name: e.target.value
              });
            }} />
              Players: <input onChange={(e) => {
                this.setState({
                  players: e.target.value
              });
            }} />
              Type: <input onChange={(e) => {
                this.setState({
                  type: e.target.value
              });
            }} />
              Playtime: <input onChange={(e) => {
                this.setState({
                  playtime: e.target.value
              });
          }} />
          </div>
          <button>Create</button>
        </form>
      </div>
    );
  }
}
export default (CreateGame);
