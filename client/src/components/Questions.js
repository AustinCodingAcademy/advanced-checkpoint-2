import React from "react";
import {Link} from "react-router-dom";
// import { Grid,Table,Button} from 'semantic-ui-react';

function Questions(props) {

    let questionsDivs = null;
    if(props.questions){
      questionsDivs = props.questions.filter(function(c){
        return !props.searchFilter || 
        (props.searchFilter && 
        c.name.toLowerCase().indexOf(props.searchFilter.toLowerCase())  > -1) || (props.searchFilter && 
          c.subject.toLowerCase().indexOf(props.searchFilter.toLowerCase())  > -1) || (props.searchFilter && 
            c.questionid.toString().indexOf(props.searchFilter)  > -1) || (props.searchFilter && 
              c.length.toString().indexOf(props.searchFilter)  > -1) || (props.searchFilter && 
                c.teacher.toLowerCase().indexOf(props.searchFilter.toLowerCase())  > -1);
      })
    }
    //console.log(this);
  return (
    <div>
                          
                      {/* { questionsDivs.map((c, index) =>
                       
                            {c.questionid},
                            {c.name}, 
                         
                          
                            {c.length}
                         
                            {c.subject}
                            {c.difficulty}
                            <Link to={"/question/" + c._id}> View </Link>
                          
                            <Button onClick={
                                        (e) => {
                                            props.removequestion(c._id);  
                                        }
                                }>Delete</Button>
                         
                        )} */}
                 

      {/* <Grid centered>
        <Grid.Row>
        </Grid.Row>
     
          <Grid.Column computer={6} tablet={6} mobile={6}>
        
                <Table basic='very' celled unstackable>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>question ID</Table.HeaderCell>
                      <Table.HeaderCell>Name</Table.HeaderCell>
                      <Table.HeaderCell>Length</Table.HeaderCell>
                      <Table.HeaderCell>Subject</Table.HeaderCell>
                      <Table.HeaderCell>Difficulty</Table.HeaderCell>
                      <Table.HeaderCell>View Detail</Table.HeaderCell>
                      <Table.HeaderCell>Delete question</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  
                  <Table.Body>
                      { questionsDivs.map((c, index) =>
                        <Table.Row>
                          <Table.Cell>
                            {c.questionid}
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
                            {c.difficulty}
                          </Table.Cell>
                          <Table.Cell>
                            <Link to={"/question/" + c._id}> View </Link>
                          </Table.Cell>
                          <Table.Cell>
                            <Button onClick={
                                        (e) => {
                                            props.removequestion(c._id);  
                                        }
                                }>Delete</Button>
                          </Table.Cell>
                        </Table.Row>
                        )}
                  </Table.Body>
                </Table>
  
            </Grid.Column>
      
      </Grid> */}
    </div>
  );
}

export default Questions;