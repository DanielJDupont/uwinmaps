import React from "react";

// Components
import Room from "./room/room";

function Building(props) {
  let roomText = "Rooms";
  if (props.rooms.length === 1) {
    roomText = "Room";
  }

  return (
    <div>
      <div class="card">
        <div class="card-header" id={"heading" + props.buildingCode}>
          <h5 class="mb-0">
            <button
              class="btn btn-link collapsed"
              data-toggle="collapse"
              data-target={"#" + props.buildingCode}
              aria-expanded="false"
              aria-controls={props.buildingCode}
            >
              <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  {props.buildingName}
                  <span class="ml-5 badge badge-primary badge-pill">
                    {props.rooms.length}
                    {` `}
                    {roomText}
                  </span>
                </li>
              </ul>
            </button>
          </h5>
        </div>
        <div
          id={props.buildingCode}
          class="collapse"
          aria-labelledby={"heading" + props.buildingCode}
          data-parent="#accordion"
        >
          <div class="card-body">
            <ul class="list-group">
              {props.rooms.map(i => (
                <Room buildingCode={props.buildingCode} roomNumber={i} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Building;
