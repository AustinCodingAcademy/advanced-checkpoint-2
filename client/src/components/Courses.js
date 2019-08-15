import React from "react";
import {Link} from "react-router-dom";
import { Grid,Table,Button} from 'semantic-ui-react';

function Courses(props) {

    let coursesDivs = null;
    if(props.courses){
      coursesDivs = props.courses.filter(function(c){
        return !props.searchFilter || 
        (props.searchFilter && 
        c.name.toLowerCase().indexOf(props.searchFilter.toLowerCase())  > -1) || (props.searchFilter && 
          c.subject.toLowerCase().indexOf(props.searchFilter.toLowerCase())  > -1) || (props.searchFilter && 
            c.courseid.toString().indexOf(props.searchFilter)  > -1) || (props.searchFilter && 
              c.length.toString().indexOf(props.searchFilter)  > -1) || (props.searchFilter && 
                c.teacher.toLowerCase().indexOf(props.searchFilter.toLowerCase())  > -1);
      })
    }
    //console.log(this);
  return (
    <div>
      <Grid centered>
        <Grid.Row>
        </Grid.Row>
     
          <Grid.Column computer={6} tablet={6} mobile={6}>
        
                <Table basic='very' celled unstackable>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Course ID</Table.HeaderCell>
                      <Table.HeaderCell>Name</Table.HeaderCell>
                      <Table.HeaderCell>Length</Table.HeaderCell>
                      <Table.HeaderCell>Subject</Table.HeaderCell>
                      <Table.HeaderCell>Teacher</Table.HeaderCell>
                      <Table.HeaderCell>View Detail</Table.HeaderCell>
                      <Table.HeaderCell>Delete Course</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  
                  <Table.Body>
                      { coursesDivs.map((c, index) =>
                        <Table.Row>
                          <Table.Cell>
                            {c.courseid}
                          </Table.Cell>
                          <Table.Cell>
                            {c.name}
                          </Table.Cell>
                          <Table.Cell>
                            {c.length}
                          </Table.Cell>
                          <Table.Cell>
                            {c.subject}
                          </Table.Cell>
                          <Table.Cell>
                            {c.teacher}
                          </Table.Cell>
                          <Table.Cell>
                            <Link to={"/course/" + c._id}> View </Link>
                          </Table.Cell>
                          <Table.Cell>
                            <Button onClick={
                                        (e) => {
                                            props.removeCourse(c._id);  
                                        }
                                }>Delete</Button>
                          </Table.Cell>
                        </Table.Row>
                        )}
                  </Table.Body>
                </Table>
  
            </Grid.Column>
      
      </Grid>
    </div>
  );
}

export default Courses;