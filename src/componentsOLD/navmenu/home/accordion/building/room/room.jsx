import React from "react";

/*
Inputs
buildingCode={props.buildingCode}
roomNumber={i}
*/
function Room(props) {
  return (
    <div>
      <a href="https://www.uwinmaps.com">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          {props.buildingCode}
          {` `}
          {props.roomNumber}
          <span class="badge badge-primary badge-pill">Show Directions</span>
        </li>
      </a>
    </div>
  );
}

export default Room;
