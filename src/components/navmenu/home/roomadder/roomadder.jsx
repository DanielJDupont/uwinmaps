import React, { useState } from "react";
import firebase from "../../../../firebase/firebase.utils";

function RoomAdder() {
  const [buildingNameInput, setBuildingNameInput] = useState();
  const [buildingCodeInput, setBuildingCodeInput] = useState();
  const [roomNumberInput, setRoomNumberInput] = useState();

  return (
    <div>
      <div class="jumbotron">
        <h1 class="display-4">Add a Room to the Database!</h1>

        <div class="card mx-2 p-2">
          <form>
            <div class="form-group">
              <label>Building Name:</label>
              <input
                type="text"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="ex: Biology Building"
                value={() => setBuildingNameInput(buildingNameInput)}
              />
            </div>
            <div class="form-group">
              <label>Building Code:</label>
              <input
                type="text"
                class="form-control"
                placeholder="ex: BB"
                value={() => setBuildingCodeInput(buildingCodeInput)}
              />
            </div>
            <div class="form-group">
              <label>Room Number:</label>
              <input
                type="text"
                class="form-control"
                placeholder="ex: 113"
                value={() => setRoomNumberInput(roomNumberInput)}
              />
            </div>
            <button
              type="submit"
              class="btn btn-primary"
              onClick={() => {
                firebase
                  .database()
                  .ref("routes2")
                  .set({
                    buildingName: buildingCodeInput,
                    buildingCode: buildingNameInput
                  });
              }}
            >
              Add Room
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RoomAdder;

// citiesRef.doc("SF").set({
//   name: "San Francisco",
//   state: "CA",
//   country: "USA",
//   capital: false,
//   population: 860000,
//   regions: ["west_coast", "norcal"]
// });
