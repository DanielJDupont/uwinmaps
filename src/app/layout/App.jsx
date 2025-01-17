import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { Route, Switch, withRouter } from "react-router-dom";

import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";
import EventForm from "../../features/event/EventForm/EventForm";
import EventDetailedPage from "../../features/event/EventDetailed/EventDetailedPage";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import UserDetailedPage from "../../features/user/UserDetailed/UserDetailedPage";
import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";
import HomePage from "../../features/home/HomePage";
import ModalManager from "../../features/modals/ModalManager";
import ClassroomDashboard from "../../features/classroom/ClassroomDashboard/ClassroomDashboard";
import BookstoreDashboard from "../../features/bookstore/BookstoreDashboard/BookstoreDashboard";
import ClassroomForm from "../../features/classroom/ClassroomForm/ClassroomForm";
import BookstoreForm from "../../features/bookstore/BookstoreForm/BookstoreForm";
import BookstoreDetailedPage from "../../features/bookstore/BookstoreDetailed/BookstoreDetailedPage";
import ClassroomDetailedPage from "../../features/classroom/ClassroomDetailed/ClassroomDetailedPage";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ModalManager />
        <Route path="/" exact component={HomePage} />
        <Route
          path="/(.+)"
          render={() => (
            <React.Fragment>
              <NavBar />
              <Container className="main">
                <Switch key={this.props.location.key}>
                  <Route
                    exact
                    path="/classrooms"
                    component={ClassroomDashboard}
                  />
                  <Route
                    path="/classrooms/:id"
                    component={ClassroomDetailedPage}
                  />
                  <Route
                    exact
                    path="/bookstore"
                    component={BookstoreDashboard}
                  />
                  <Route
                    path="/bookstore/:id"
                    component={BookstoreDetailedPage}
                  />
                  <Route exact path="/events" component={EventDashboard} />
                  <Route path="/events/:id" component={EventDetailedPage} />
                  <Route path="/people" component={PeopleDashboard} />
                  <Route path="/profile/:id" component={UserDetailedPage} />
                  <Route path="/settings" component={SettingsDashboard} />
                  <Route
                    path={["/createClassroom", "/manage/:id"]}
                    component={ClassroomForm}
                  />
                  <Route
                    path={["/createBookstore", "/manage/:id"]}
                    component={BookstoreForm}
                  />
                  <Route
                    path={["/createEvent", "/manage/:id"]}
                    component={EventForm}
                  />
                </Switch>
              </Container>
            </React.Fragment>
          )}
        />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
