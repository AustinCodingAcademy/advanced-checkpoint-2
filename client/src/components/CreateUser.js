import React, {Component} from "react";


class CreateUser extends Component {
    constructor() {
        super();
        this.state = {
          
          User: {
            firstName: "",
            lastName: "",
            birthday: "",
            phone: "",
            state: ""
          },
          
        };
      }



    render(){
        return(
            <div>
            <h1>User</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.createUser) {
              this.props.createUser(this.state.user);
            }
          }}>
            <div>
              First Name: <input onChange={(e) => {
                const User = {name: e.target.value};
                this.setState({
                  User: Object.assign(this.state.user,user)
                });
              }} />
            </div>
            <div>
              Last Name: <input onChange={(e) => {
                const User = {occupation: e.target.value};
                this.setState({
                  User: Object.assign(this.state.user,user)
                });
              }} />
            </div>
            <div>
              Birthday: <input onChange={(e) => {
                const User = {avatar: e.target.value};
                this.setState({
                  User: Object.assign(this.state.user,user)
                });
              }} />
            </div>
            <div>
              Phone: <input onChange={(e) => {
                const User = {avatar: e.target.value};
                this.setState({
                  User: Object.assign(this.state.user,user)
                });
              }} />
            </div>
            <div>
              State: <input onChange={(e) => {
                const User = {avatar: e.target.value};
                this.setState({
                  User: Object.assign(this.state.user,user)
                });
              }} />
            </div>
            <button>Create</button>
          </form>
        </div>
        )
    }
}

export default CreateUser