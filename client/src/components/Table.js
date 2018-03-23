import React from 'react';
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
  TableCell
} from 'material-ui/Table';

function TableData(props) {

  let userData = props.data.map((d,i) => {
    return (
      <TableRow key={`tr-${i}`}>
        <TableRowColumn ><a href={d.linkedin} target="blank" >{d.firstname} {d.lastname}</a></TableRowColumn >
        <TableRowColumn >{d.experience}</TableRowColumn>
        <TableRowColumn >{d.skills}</TableRowColumn>
        <TableRowColumn ><Link to={"/application/" + d._id}> View </Link></TableRowColumn>
        <TableRowColumn><button
                          onClick={ () => props.delete(d._id) } 
                        > Delete </button>
        </TableRowColumn>
      </TableRow>
    );
  });  

/*
  let row = (x, i, header) => (
      <TableRow key={`tr-${i}`}>
        {header.map((y, k) => 
          <TableRowColumn key={`trc-${k}`}>
            {x[y.prop]}
          </TableRowColumn>
        )}
      </TableRow>
  );
*/

return (  
  <Table>
    <TableHeader>
      <TableRow>
        {props.header.map((x, i) => 
          <TableHeaderColumn key={`thc-${i}`}>
            {x.name}
          </TableHeaderColumn>
        )}
      </TableRow>
    </TableHeader>
    <TableBody>
      {userData}
    </TableBody>
  </Table>
)

}

export default TableData;