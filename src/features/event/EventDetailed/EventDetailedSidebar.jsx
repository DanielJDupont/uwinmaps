import React, { Fragment } from "react";
import { Segment, Item, Label } from "semantic-ui-react";
import { issuedAtTime } from "@firebase/util";

export const EventDetailedSidebar = ({ attendees }) => {
  const isHost = false;
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
        {attendees && attendees.length}{" "}
        {attendees && attendees.length === 1 ? "Person" : "People"}
        Going
      </Segment>
      <Segment attached>
        <Item.Group divided>
          {attendees &&
            attendees.map(attendee => (
              <Item key={attendee.id} style={{ position: "relative" }}>
                {isHost && (
                  <Label
                    style={{ position: "absolute" }}
                    color="blue"
                    ribbon="right"
                  >
                    Host
                  </Label>
                )}
                <Item.Image size="tiny" src={attendee.photoURL} />
                <Item.Content verticalAlign="middle">
                  <Item.Header as="h3">Attendee Name</Item.Header>
                </Item.Content>
              </Item>
            ))}
        </Item.Group>
      </Segment>
    </Fragment>
  );
};
