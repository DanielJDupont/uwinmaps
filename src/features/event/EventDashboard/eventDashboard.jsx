import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";
import cuid from "cuid";

const eventsFromDashboard = [
  {
    id: "1",
    title: "Modern JavaScript For Web Development",
    date: "2018-03-27T11:00:00+00:00",
    category: "culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "EPICentre, St Katharine's & Wapping, Windsor, Ontario, Canada",
    hostedBy: "Amy",
    hostPhotoURL: "https://randomuser.me/api/portraits/women/96.jpg",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/women/93.jpg"
      },
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/91.jpg"
      }
    ]
  },
  {
    id: "2",
    title: "Web and Mobile Frameworks",
    date: "2018-03-28T14:00:00+00:00",
    category: "drinks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "EPICentre, Henrietta Street, Windsor, Ontario, Canada",
    hostedBy: "Tom",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/96.jpg",
    attendees: [
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/women/95.jpg"
      },
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/94.jpg"
      }
    ]
  }
];

class EventDashboard extends Component {
  state = {
    events: eventsFromDashboard,
    isOpen: false,
    selectedEvent: null
  };

  // handleFormOpen = () => {
  //   if (this.state.isOpen === false) {
  //     this.setState({ isOpen: true });
  //   } else {
  //     this.setState({ isOpen: false });
  //   }
  // };

  // handleIsOpenToggle = () => {
  //   this.setState(prevState => ({
  //     isOpen: !prevState.isOpen
  //   }));
  // };

  handleCreateFormOpen = () => {
    this.setState({
      isOpen: true,
      selectedEvent: null
    });
  };

  handleCreateFormCancel = () => {
    this.setState({
      isOpen: false
    });
  };

  handelCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assests/user.png";
    // Appending newEvent to the current array.
    this.setState(({ events }) => ({
      events: [...events, newEvent],
      isOpen: false
    }));
  };

  handleSelectEvent = (evt, event) => {
    console.log(evt);
    console.log(event);
    this.setState({
      selectedEvent: event,
      isOpen: true
    });
  };

  render() {
    const { events, isOpen, selectedEvent } = this.state;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList events={events} selectEvent={this.handleSelectEvent} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={this.handleCreateFormOpen}
            positive
            content="Create Event"
          />
          {isOpen && (
            <EventForm
              selectedEvent={selectedEvent}
              createEvent={this.handelCreateEvent}
              cancelFormOpen={this.handleCreateFormCancel}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

export default EventDashboard;
