import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import "./NavBar.css";

export default class NavBar extends Component {
  render() {
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item header>
            <i className="material-icons">map</i> UWinMaps
          </Menu.Item>
          <Menu.Item name="Classrooms" />
          <Menu.Item name="Bookstore" />
          <Menu.Item name="Events" />
          <Menu.Item name="Resources" />
          <Menu.Item name="Photos" />
          <Menu.Item>
            <Button floated="right" positive inverted content="Create Event" />
          </Menu.Item>
          <Menu.Item position="right">
            <Button basic inverted content="Login" />
            <Button
              basic
              inverted
              content="Sign Out"
              style={{ marginLeft: "0.5em" }}
            />
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}
