import React, { Fragment } from "react";
import { Segment, Image, Item, Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const eventImageStyle = {
  filter: "brightness(30%)"
};

const eventImageTextStyle = {
  position: "absolute",
  bottom: "5%",
  left: "5%",
  width: "100%",
  height: "auto",
  color: "white"
};

const EventDetailedHeader = ({
  event,
  isHost,
  isGoing,
  goingToEvent,
  cancelGoingToEvent,
  loading,
  authenticated,
  openModal
}) => {
  // /assets/categoryImages/${event.category}.jpg

  return (
    <Segment.Group>
      <Segment basic attached="top" style={{ padding: "0" }}>
        <Image
          src={`https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`}
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
                  {event.date && format(event.date.toDate(), "EEEE do LLLL")}
                </p>
                <p>
                  Hosted by{" "}
                  <strong>
                    <Link
                      to={`/profile/${event.hostUid}`}
                      style={{ color: "white" }}
                    >
                      {event.hostedBy}
                    </Link>
                  </strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached="bottom" clearing>
        {!isHost && (
          <Fragment>
            {isGoing && (
              <Button onClick={() => cancelGoingToEvent(event)}>
                Cancel My Place
              </Button>
            )}
            {!isGoing && authenticated && (
              <Button
                loading={loading}
                onClick={() => goingToEvent(event)}
                color="blue"
              >
                Join This Classroom
              </Button>
            )}
            {!authenticated && (
              <Button
                loading={loading}
                onClick={() => openModal("UnauthModal")}
                color="blue"
              >
                Join This Classroom
              </Button>
            )}
          </Fragment>
        )}

        {isHost && (
          <Button
            as={Link}
            to={`/manage/${event.id}`}
            color="blue"
            floated="right"
          >
            Manage Event
          </Button>
        )}
      </Segment>
    </Segment.Group>
  );
};

export default EventDetailedHeader;
