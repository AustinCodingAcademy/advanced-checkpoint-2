import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import UpdateInputContainer from "../containers/UpdateInputContainer";

class ShowEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deleted: false
        }
    }
    
    componentDidMount() {
        this.props.loadEntry(this.props.match.params.id);
    }

    componentWillReceiveProps(nextprops) {
        if (this.props.match.params.id !== nextprops.match.params.id) {
            this.props.loadEntry(nextprops.match.params.id);
        }
    }

    handleClick() {
        this.props.deleteEntry(this.props.match.params.id);
        this.setState({deleted: true});
    }

    render() {
        const regContent = () => ( 
            <div className="Right">
                <UpdateInputContainer />
                <a href="#" onClick={(e) =>{
                    e.preventDefault();
                    this.handleClick();
                }} >Delete</a>
            </div>
        );

        // UPDATE THING DOESN'T WORK -- DOESN'T FILL INPUTS OR UPDATE / SEND ACTIONS.
        const redirect = () => (
            <div>
                <Redirect to="/" />
            </div>
        );

        return ( this.state.deleted ? redirect() : regContent() )
    }
}

export default ShowEntry;
