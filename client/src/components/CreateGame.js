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
          <div>
              Name: <input onChange={(e) => {
                this.setState({
                  name: e.target.value
              });
            }} />
            </div>
            <div>
              Players: <input onChange={(e) => {
                this.setState({
                  players: e.target.value
              });
            }} />
            </div>
            <div>
              Type: <input onChange={(e) => {
                this.setState({
                  type: e.target.value
              });
            }} />
            </div>
            <div>
              Playtime: <input onChange={(e) => {
                this.setState({
                  playtime: e.target.value
              });
          }} />
          </div>
          </div>
          <button>Create</button>
        </form>
      </div>
    );
  }
}
export default (CreateGame);
