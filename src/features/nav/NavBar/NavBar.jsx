import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import "./NavBar.css";
import { NavLink, Link, withRouter } from "react-router-dom";
import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";

class NavBar extends Component {
  state = {
    authenticated: true
  };

  handleSignIn = () => {
    this.setState({ authenticated: true });
  };

  handleSignOut = () => {
    this.setState({ authenticated: false });
    this.props.history.push("/");
  };

  render() {
    const { authenticated } = this.state;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} exact to="/" header>
            <i className="material-icons">map</i> UWinMaps
          </Menu.Item>
          <Menu.Item name="Classrooms - PORTING CODE" />
          <Menu.Item name="Bookstore" />
          <Menu.Item
            as={NavLink}
            exact
            to="/events"
            name="Events - PORTING CODE"
          />
          {/*<Menu.Item as={NavLink} to="/people" name="People" />*/}
          <Menu.Item name="Resources" />
          <Menu.Item name="Photos Testing - PORTING CODE" />
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
          {authenticated ? (
            <SignedInMenu signOut={this.handleSignOut} />
          ) : (
            <SignedOutMenu signIn={this.handleSignIn} />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
