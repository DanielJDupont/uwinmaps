import React, { Component } from "react";
import { List, Image } from "semantic-ui-react";

class EventListAttendee extends Component {
  render() {
    return (
      <List>
        <Image
          as="a"
          size="mini"
          circular
          src="https://randomuser.me/api/portraits/women/96.jpg"
        />
      </List>
    );
  }
}

export default EventListAttendee;
