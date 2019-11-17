import React from "react";
import { Segment, Item, Button, Image, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { format, parseISO } from "date-fns";

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

export const EventDetailedHeader = ({ event }) => {
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
                    content={event.title}
                    style={{ color: "white" }}
                  />
                  <p>
                    {event.date && format(parseISO(event.date), "EEEE do LLLL")}
                  </p>
                  <p>
                    Hosted by <strong>{event.hostedBy}</strong>
                  </p>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>
        </Segment>

        <Segment attached="bottom">
          <Button>Cancel My Place</Button>
          <Button color="blue">JOIN THIS EVENT</Button>

          <Button
            as={Link}
            to={`/manage/${event.id}`}
            color="orange"
            floated="right"
          >
            Manage Event
          </Button>
        </Segment>
      </Segment.Group>
    </div>
  );
};
