import React, { useState, useEffect } from "react";
import firebase from "../../firebase/firebase.utils";

function useTimes() {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("cities")
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

const TimesList = () => {
  const times = useTimes();

  return (
    <div>
      <h2>Times List</h2>
      <ol>
        {times.map(time => (
          <li>
            {time.name}
            {time.population}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TimesList;
