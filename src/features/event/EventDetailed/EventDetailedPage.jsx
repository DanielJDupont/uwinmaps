import React from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import EventDetailedHeader from "./EventDetailedHeader";
import { EventDetailedInfo } from "./EventDetailedInfo";
import { EventDetailedChat } from "./EventDetailedChat";
import { EventDetailedSidebar } from "./EventDetailedSidebar";

const event = {
  id: "1",
  title: "How to Code in React in 10 Hours",
  date: "2020-03-27",
  category: "technology",
  description: "The best library in the world",
  city: "San Francisco, California, United States of America",
  venue: "Apple Dome",
  hostedBy: "Amy",
  hostPhotoURL: "https://randomuser.me/api/portraits/women/97.jpg",
  attendees: [
    {
      id: "a",
      name: "Noah",
      photoURL: "https://randomuser.me/api/portraits/men/21.jpg"
    },
    {
      id: "b",
      name: "Eline",
      photoURL: "https://randomuser.me/api/portraits/women/96.jpg"
    }
  ]
};

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  let event = {};
  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }
  return {
    event
  };
};

const EventDetailedPage = ({ event }) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader event={event} />
        <EventDetailedInfo event={event} />
        <EventDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSidebar attendees={event.attendees} />
      </Grid.Column>
    </Grid>
  );
};

export default connect(mapState)(EventDetailedPage);
