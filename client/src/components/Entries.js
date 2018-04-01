import React, { Component } from "react";
import { Link } from "react-router-dom";

class Entries extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const entryList = this.props.entries.map( (e, i) => (
            <div className="entryList" key={i}>
                <div>{e.title}</div>
                <div>{e.body.substr(0, 20) + "..."}</div>
                <div>{e.date}</div>
                <Link to={`/entry/${e.id}`}>View</Link>
            </div>
        ));
        return (<div>{entryList}</div>);
    }
}

export default Entries;
