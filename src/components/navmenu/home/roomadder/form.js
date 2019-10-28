import React from "react";
import useForm from "./useForm";
import firebase from "../../../../firebase/firebase.utils";
import Swal from "sweetalert2";

const Form = () => {
  const { values, handleChange, handleSubmit } = useForm(login);

  function login() {
    firebase
      .firestore()
      .collection("routes2")
      .doc(values.buildingCode)
      .set({
        buildingName: values.buildingName,
        buildingCode: values.buildingCode,
        roomNumber: values.roomNumber
      })
      .then(function() {
        console.log("Document successfully written!");
        Swal.fire({
          type: "success",
          title: "Added!",
          text: "The Route Is Now Stored and Visible for Others!",
          confirmButtonText: "Great!"
        });
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
        Swal.fire("There Was an Error Writing to the Database!");
      });
  }

  return (
    <div className="p-2 m-2">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Building Name</label>
          <input
            className="form-control"
            type="text"
            name="buildingName"
            onChange={handleChange}
            value={values.buildingName}
            required
          />
        </div>
        <div className="form-group">
          <label className="label">Building Code</label>
          <input
            className="form-control"
            type="text"
            name="buildingCode"
            onChange={handleChange}
            value={values.buildingCode}
            required
          />
        </div>
        <div className="form-group">
          <label className="label">Room Number</label>
          <input
            className="form-control"
            type="text"
            name="roomNumber"
            onChange={handleChange}
            value={values.roomNumber}
            required
          />
        </div>
        <button type="submit" className="btn btn-outline-primary">
          Add Room
        </button>
      </form>
    </div>
  );
};

export default Form;
