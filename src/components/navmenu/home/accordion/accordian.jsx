import React, { useEffect, useState } from "react";
import Building from "./building/building";

// For a database call.
import firebase from "../../../../firebase/firebase.utils";

// Database call function.
function useRoutes() {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("routes")
      .onSnapshot(snapshot => {
        const newRoutes = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setRoutes(newRoutes);
      });
  }, []);

  return routes;
}

// Rendering function.
function Accordion(props) {
  const routes = useRoutes();
  return (
    <div>
      <div id="accordion" class="px-2 mx-auto">
        {routes.map(route => (
          <div>{route.buildingCode}</div>
        ))}
      </div>
      <div id="accordion" class="px-2 mx-auto">
        {props.list.map(element => (
          <Building {...element} />
        ))}
      </div>
    </div>
  );
}

export default Accordion;
