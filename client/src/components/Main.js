import React, { Component } from "react";
import CoursesContainer from "../containers/CoursesContainer";
import SearchCoursesContainer from "../containers/SearchCoursesContainer";


class Main extends Component {
  constructor() {
    super();
  } 

  render() {
      return (
        <div>
          <div style={{float: "left", width: "49%"}}>
            <center><h2>Courses List </h2></center>
            <CoursesContainer />
          </div>
          <div style={{float: "left", width: "49%"}}>
            {/*}<div><CreateCourseContainer /></div>{*/}
            <div><SearchCoursesContainer /></div>
            {/*}<div><EditCourseContainer /></div>{*/}
          </div>
        </div>
      );
    }
}
export default Main;
