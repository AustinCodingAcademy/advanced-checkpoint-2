import React, { Component } from "react";
import {Grid} from "semantic-ui-react";

class Course extends Component {

  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getCourse(id);
  }

  render() {
    //console.log(this.props);
    return (
      <div>
        <Grid centered>
          <Grid.Row>
          </Grid.Row>
     
          <Grid.Column computer={2} tablet={2} mobile={2}>
            <h2>Course Detail</h2>
              <div><b>ID:</b> {this.props.course.courseid}</div>
              <div><b>Name:</b> {this.props.course.name}</div>
              <div><b>Length:</b> {this.props.course.length}</div>
              <div><b>Subject:</b> {this.props.course.subject}</div>
              <div><b>Teacher:</b> {this.props.course.teacher}</div>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
export default Course;