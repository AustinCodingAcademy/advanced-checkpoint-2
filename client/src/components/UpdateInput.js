import React, { Component } from "react";
import { Redirect } from "react-router-dom";

// set state from props directly or use set state based on lifecycle hook?

class UpdateInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entry: {
                title: "",
                body:  ""
            },
            isUpdated: false
        }
    }

    componentWillReceiveProps(nextprops) {
        if (this.props.entry !== nextprops.entry) {
            this.setState({
                entry: {
                    title: nextprops.entry.title,
                    body: nextprops.entry.body
                }
            });
        }
    }

    handleUpdate() {
        if(this.props.updateEntry) {
            this.props.updateEntry(this.props.entry.id, this.state.entry);
            this.setState({isUpdated: true});
        }
    }

    render() {
        const regContent = 
            <form className="right" onSubmit={(e) => {
                e.preventDefault();
                this.handleUpdate();
            }}>
                <div>
                    title: <input onChange={(e) => {
                        const ent = {title: e.target.value};
                        this.setState({
                            entry: Object.assign(this.state.entry, ent)
                        });
                    }} value={this.state.entry.title} />
                    body: <input onChange={(e) => {
                        const ent = {body: e.target.value};
                        this.setState({
                            ent: Object.assign(this.state.entry, ent)
                        });
                    }} value={this.state.entry.body} />
                    <button>Update</button>
                </div>
            </form>

        const updated = <Redirect to="/" />

        return (
            <div>{this.state.isUpdated ? updated : regContent}</div>
        )
    }
}

export default UpdateInput;