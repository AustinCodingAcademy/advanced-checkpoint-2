import React from "react";
import { Link } from "react-router-dom";
import Table from "../components/Table";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function Applications (props) {

  return (
    <div>
      <h2>All Applications</h2>
      <MuiThemeProvider>
        <Table 
          delete={props.removeApplication}
          data={props.applications} 
          header={[
            {
              name: "Full Name",
              prop: 'name'
            },    
            {
              name: "Experience",
              prop: 'experience'
            },        
            {
              name: "Top Skills",
              prop: 'university'
            },        
            {
              name: "View Detials",
              prop: 'details'
            },
            {
              name: "Delete?",
              prop: 'delete'
            }
          ]}/>
      </MuiThemeProvider>
    </div>
    );
  }

export default Applications;