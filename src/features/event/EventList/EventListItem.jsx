import React, { Component } from "react";
import { Segment, Item, Icon, List, Button, Label } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";
import { NavLink, Link, withRouter } from "react-router-dom";
import { format } from "date-fns";
import { objectToArray } from "../../../app/common/util/helpers";
import "./EventListItem.css";
import { withFirebase } from "react-redux-firebase";
import { connect } from "react-redux";

const mapState = state => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile
});

class EventListItem extends Component {
  render() {
    const { event } = this.props;
    const { auth, profile } = this.props;
    const authenticated = auth.isLoaded && !auth.isEmpty;
    return (
      <Segment.Group>
        <Segment id="segment">
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={event.hostPhotoURL} />
              <Item.Content>
                <Item.Header as={Link} to={`/events/${event.id}`}>
                  {event.title}
                </Item.Header>
                <Item.Description>
                  Hosted by{" "}
                  <Link to={`/profile/${event.hostUid}`}>{event.hostedBy}</Link>{" "}
                </Item.Description>
                {event.cancelled && (
                  <Label
                    style={{ top: "-30px" }}
                    ribbon="right"
                    color="blue"
                    size="large"
                    content="This Event Was Cancelled"
                  />
                )}
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon className="orange" name="clock" />
            {format(event.date.toDate(), "EEEE do LLL")} at{" "}
            {format(event.date.toDate(), "h:mm a")} |
            <Icon className="red" name="map marker alternate" /> {event.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {event.attendees &&
              objectToArray(event.attendees).map(attendee => (
                <EventListAttendee key={attendee.id} attendee={attendee} />
              ))}
          </List>
        </Segment>
        <Segment clearing>
          <span>{event.description}</span>
          {/* Logged in, show functional View button */}
          {authenticated && (
            <Button
              as={Link}
              to={`/events/${event.id}`}
              color="blue"
              floated="right"
              content="View"
            />
          )}
          {/* Not logged in, show nonfunctional Login to View button */}
          {!authenticated && (
            <Button
              // as={Link}
              // to={`/events/${event.id}`}
              color="blue"
              floated="right"
              content="Login to View"
              disabled
            />
          )}
        </Segment>
      </Segment.Group>
    );
  }
}

// export default EventListItem;
export default withRouter(withFirebase(connect(mapState)(EventListItem)));
