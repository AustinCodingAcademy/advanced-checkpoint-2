import React, { Component } from "react";
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Link} from "react-router-dom";

import ApplicationContainer from "../containers/ApplicationContainer";
import ApplicationsContainer from "../containers/ApplicationsContainer";
import CreateThingsContainer from "../containers/CreateThingsContainer";

class LeftDrawer extends React.Component {
    constructor(props) {
        super(props);
    }

/*
    <BrowserRouter>
    <div>
        <Link to={"/"}></Link>
        <MenuItem><Link to={"/applications"}>All Applications</Link></MenuItem>
        <MenuItem><Link to={"/createapplication"}>Apply</Link></MenuItem>
        <Switch>
        <Route path="/application/:id" component={ApplicationContainer} />
        <Route path="/applications" component={ApplicationsContainer} />
        <Route path="/createapplication" component={CreateThingsContainer} />
        </Switch>
    </div>
    </BrowserRouter> 
*/

render() {
    return (
        <div>

            <Drawer open={this.props.open} docked={false} onRequestChange={this.props.close} >
                    {/*<Link to={"/"}></Link>*/}
                    <MenuItem 
                        onClick={this.props.close}
                        containerElement={<Link to={"/applications"} />} 
                        primaryText="All Applications"
                    />
                    <MenuItem 
                        onClick={this.props.close}
                        containerElement={<Link to={"/apply"} />}
                        primaryText="Apply"
                    />
            </Drawer>
            
        </div>
    );
    }
}
export default LeftDrawer;