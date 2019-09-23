import React, { Component } from "react";

class TextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entry: {
                title: "",
                body: "" 
            }
        }
    }
    render() {
        return (
            <div className="Right">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    if(this.props.createEntry) {
                        this.props.createEntry(this.state.entry);
                        this.setState({
                            entry: {
                                title: "",
                                body: ""
                            }
                        })
                    }
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
                    <button>Create</button>
                </div>
                </form>
            </div>
        )
    }
}

export default TextInput;