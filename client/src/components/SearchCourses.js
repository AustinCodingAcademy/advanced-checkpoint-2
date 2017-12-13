import React from 'react';
import {Input} from "semantic-ui-react";

function SearchCourses(props) {
  return (
      <div>
        <center>
        <h2>Course Search</h2>
        Search Courses: 
        <Input placeholder="Search On Any Field" onChange={(e)=>{
            if(props.set){
              props.set(e.target.value);
            }
        }} />
        </center>
      </div>
  );
}

export default SearchCourses;