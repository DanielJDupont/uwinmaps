import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";

import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";
import EventForm from "../../features/event/EventForm/EventForm";
import EventDetailedPage from "../../features/event/EventDetailed/EventDetailedPage";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import UserDetailedPage from "../../features/user/UserDetailed/UserDetailedPage";
import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";
import HomePage from "../../features/home/HomePage";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route path="/" exact component={HomePage} />
        <Route
          path="/(.+)"
          render={() => (
            <React.Fragment>
              <NavBar />
              <Container className="main">
                <Route exact path="/events" component={EventDashboard} />
                <Route path="/events/:id" component={EventDetailedPage} />
                <Route path="/people" component={PeopleDashboard} />
                <Route path="/profile/:id" component={UserDetailedPage} />
                <Route path="/settings" component={SettingsDashboard} />
                <Route path="/createEvent" component={EventForm} />
              </Container>
            </React.Fragment>
          )}
        />
      </React.Fragment>
    );
  }
}

export default App;
