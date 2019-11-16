import React, { Fragment } from "react";
import { Segment, Item, Label } from "semantic-ui-react";

export const EventDetailedSidebar = () => {
  return (
    <Fragment>
      <Segment
        textAlign="center"
        style={{ border: "none" }}
        attached="top"
        secondary
        inverted
        color="blue"
      >
        2 People Going
      </Segment>
      <Segment attached>
        <Item.Group divided>
          <Item style={{ position: "relative" }}>
            <Label
              style={{ position: "absolute" }}
              color="orange"
              ribbon="right"
            >
              Host
            </Label>
            <Item.Image size="tiny" src="https://via.placeholder.com/150" />
            <Item.Content verticalAlign="middle">
              <Item.Header as="h3">Attendee Name</Item.Header>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    </Fragment>
  );
};
