import React from "react";
import Building from "./building/building";

function BuildingAccordion(props) {
  return (
    <div>
      <div id="accordion" class="px-2 mx-auto">
        {props.list.map(element => (
          <Building {...element} />
        ))}
      </div>
    </div>
  );
}

export default BuildingAccordion;
