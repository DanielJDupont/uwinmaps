import React, { useState, useEffect } from "react";
import firebase from "../../firebase/firebase.utils";

function useTimes() {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("routes")
      .onSnapshot(snapshot => {
        const newTimes = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setTimes(newTimes);
      });
  }, []);

  return times;
}

const RoutesList = () => {
  const routes = useTimes();

  return (
    <div>
      <div>
        {routes.map(route => (
          <li>
            <div>---</div>
            <div>{route.buildingCode}</div>{" "}
            {/* time.buildingCode is a string */}
            <div>{route.buildingName}</div>{" "}
            {/* time.buildingName is a string */}
            <div>{route.rooms}</div>
            {/* time.rooms is an array of strings*/}
            <div>---</div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default RoutesList;
