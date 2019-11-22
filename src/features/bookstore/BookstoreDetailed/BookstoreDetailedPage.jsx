import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import BookstoreDetailedHeader from "./EventDetailedHeader";
import { BookstoreDetailedInfo } from "./EventDetailedInfo";
import { BookstoreDetailedChat } from "./EventDetailedChat";
import { BookstoreDetailedSidebar } from "./EventDetailedSidebar";
import { withFirestore } from "react-redux-firebase";
import { toastr } from "react-redux-toastr";
import Swal from "sweetalert2";
import { objectToArray } from "../../../app/common/util/helpers";

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {};

  if (
    state.firestore.ordered.events &&
    state.firestore.ordered.events.length > 0
  ) {
    event = state.firestore.ordered.events.filter(
      event => event.id === eventId[0] || {}
    );
  }

  return {
    event
  };
};

class BookstoreDetailedPage extends Component {
  async componentDidMount() {
    const { firestore, match, history } = this.props;
    let event = await firestore.get(`events/${match.params.id}`);
    console.log(event);
    if (!event.exists) {
      history.push("/events");
      Swal.fire({
        type: "error",
        title: "Sorry!",
        text: "What you are looking for wasn't found!",
        confirmButtonText: "Gotcha!"
      });
      toastr.error("Sorry!", "Event not found!");
    }
  }

  render() {
    const { event } = this.props;
    const attendees =
      event && event.attendees && objectToArray(event.attendees);
    return (
      <Grid>
        <Grid.Column width={10}>
          <BookstoreDetailedHeader event={event} />
          <BookstoreDetailedInfo event={event} />
          <BookstoreDetailedChat />
        </Grid.Column>
        <Grid.Column width={6}>
          <BookstoreDetailedSidebar attendees={attendees} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default withFirestore(connect(mapState)(BookstoreDetailedPage));
