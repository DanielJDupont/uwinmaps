import React, { Component, Fragment } from "react";
import Components from "../../components/components.jsx";

// <div className="App">
//   <Components />
// </div>
// Fragment does not show up in the resulting page.

// import NavBar
import { Container } from "semantic-ui-react";
import eventDashboard from "../../features/event/EventDashboard/eventDashboard.jsx";
import NavBar from "../../features/nav/NavBar/NavBar.jsx";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Container className="main">
        <eventDashboard />
      </Container>
    </Fragment>
  );
}

export default App;
