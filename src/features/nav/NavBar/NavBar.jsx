import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Menu, Container, Button } from "semantic-ui-react";
import "./NavBar.css";
import { NavLink, Link, withRouter } from "react-router-dom";
import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";
import { openModal } from "../../modals/modalActions";
import { withFirebase } from "react-redux-firebase";

const actions = {
  openModal
};

const mapState = state => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile
});

class NavBar extends Component {
  handleSignIn = () => {
    this.props.openModal("LoginModal");
  };

  handleRegister = () => {
    this.props.openModal("RegisterModal");
  };

  handleSignOut = () => {
    this.props.firebase.logout();
    this.props.history.push("/");
  };

  render() {
    const { auth, profile } = this.props;
    const authenticated = auth.isLoaded && !auth.isEmpty;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} exact to="/" header>
            <i className="material-icons">map</i> UWinMaps
          </Menu.Item>
          <Menu.Item as={NavLink} exact to="/classrooms" name="Classrooms" />
          <Menu.Item as={NavLink} exact to="/bookstore" name="Bookstore" />
          <Menu.Item as={NavLink} exact to="/events" name="Events" />

          {authenticated && (
            <Fragment>
              <Menu.Item>
                <Button
                  className="ui teal button"
                  as={Link}
                  to="/createClassroom"
                  floated="right"
                  positive
                  inverted
                  content="Create Classroom"
                />
              </Menu.Item>
              <Menu.Item>
                <Button
                  className="ui teal button"
                  as={Link}
                  to="/createEvent"
                  floated="right"
                  positive
                  inverted
                  content="Create Event"
                />
              </Menu.Item>
              <Menu.Item>
                <Button
                  className="ui teal button"
                  as={Link}
                  to="/createBookstore"
                  floated="right"
                  positive
                  inverted
                  content="Create Bookstore Item"
                />
              </Menu.Item>
            </Fragment>
          )}
          {authenticated ? (
            <SignedInMenu
              auth={auth}
              profile={profile}
              signOut={this.handleSignOut}
              currentUser={auth.currentUser}
            />
          ) : (
            <SignedOutMenu
              signIn={this.handleSignIn}
              register={this.handleRegister}
            />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(withFirebase(connect(mapState, actions)(NavBar)));
