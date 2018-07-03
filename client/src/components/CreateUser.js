import React, {Component} from "react";


class CreateUser extends Component {
    constructor() {
        super();
        this.state = {
          
          
            firstName: "",
            lastName: "",
            birthday: "",
            phone: "",
            state: ""
          
          
        };
      }



    render(){
        return(
            <div>
            <h1>User</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.createUser) {
              this.props.createUser(this.state);
            }
          }}>
            <div>
              First Name: <input onChange={(e) => {
          
                this.setState({
                  firstName: e.target.value
                });
              }} />
            </div>
            <div>
              Last Name: <input onChange={(e) => {
             
                this.setState({
                  lastName: e.target.value
                });
              }} />
            </div>
            <div>
              Birthday: <input onChange={(e) => {
          
                this.setState({
                  birthday: e.target.value
                });
              }} />
            </div>
            <div>
              Phone: <input onChange={(e) => {
              
                this.setState({
                  phone: e.target.value
                });
              }} />
            </div>
            <div>
              State: <input onChange={(e) => {
              
                this.setState({
                  state: e.target.value
                });
              }} />
            </div>
            <button>Create</button>
          </form>
        </div>
        )
    }
}

export default CreateUser;