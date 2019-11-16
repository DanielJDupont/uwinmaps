import React from "react";
import { Segment, Item, Button, Image, Header } from "semantic-ui-react";

const eventImageStyle = {
  filter: "brightness(30%)",
  height: "150px",
  width: "100%"
};

const eventImageTextStyle = {
  position: "absolute",
  bottom: "5%",
  left: "5%",
  width: "100%",
  height: "auto",
  color: "white"
};

export const EventDetailedHeader = () => {
  return (
    <div>
      <Segment.Group>
        <Segment basic attached="top" style={{ padding: "0" }}>
          <Image
            src="https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            fluid
            style={eventImageStyle}
          />

          <Segment basic style={eventImageTextStyle}>
            <Item.Group>
              <Item>
                <Item.Content>
                  <Header
                    size="huge"
                    content="Event Title"
                    style={{ color: "white" }}
                  />
                  <p>Event Date</p>
                  <p>
                    Hosted by <strong>Hosted by</strong>
                  </p>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>
        </Segment>

        <Segment attached="bottom">
          <Button>Cancel My Place</Button>
          <Button color="blue">JOIN THIS EVENT</Button>

          <Button color="orange" floated="right">
            Manage Event
          </Button>
        </Segment>
      </Segment.Group>
    </div>
  );
};
