import React, { Component } from "react";
import "./App.css";
import Main from "./containers/MainContainer";
import Course from "./containers/CourseContainer";
import CreateCourse from "./containers/CreateCourseContainer";
import EditCourse from "./containers/EditCourseContainer";
import {Link} from "react-router-dom";
import {Button} from "semantic-ui-react";

import {
  BrowserRouter as Router,
  Route,
  Switch
 } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.loadCourses();
  }
  
  render() {
    return (
      <Router>
        <div>
        <center> 
          <h1>Courses Catalog</h1>
          <Link to="/courses"><Button>List Courses</Button></Link>
          <Link to="/createcourse"><Button>Create Course</Button></Link>
          <Link to="/editcourse"><Button>Edit Course</Button></Link>
        </center>
          <Switch>  
            <Route path="/course/:id" component={Course} />
            <Route path="/courses" component={Main} />
            <Route path="/createcourse" component={CreateCourse} />
            <Route path="/editcourse" component={EditCourse} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default (App);



