import React from "react";
import {Link} from "react-router-dom";

function ResolvedParts(props) {

  let partDivs = null;
  if (props.parts) {
    partDivs = props.parts;
  }
  const resolvedParts = [];
  for (let m=0; m<partDivs.length; m++) {
    let thisPart = partDivs[m];
    console.log("partDivs[" + m + "]: " + thisPart);
    if (thisPart.status === "Resolved") {
      resolvedParts.push(thisPart);
    }
  }
  console.log(props.parts)
  return (
    <div>
      {resolvedParts.map((p,i) =>
          <div key={i} id="part">
          <br />  <div><b>Part number:</b> {p.partNumber}</div>
          <br />  <div><b>Location: </b> {p.location}</div>
            <Link to={"/parts/" + p._id}> View </Link>
            <button onClick={
              (e) => {
                  props.removePart(p._id);
              }
            }>Delete</button>
          </div>
          )}
    </div>
  );
}
export default ResolvedParts;
