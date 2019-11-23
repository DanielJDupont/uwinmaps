import React, { Component } from "react";
import { Segment, Item, Icon, List, Button, Label } from "semantic-ui-react";
import ClassroomListAttendee from "./ClassroomListAttendee";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { objectToArray } from "../../../app/common/util/helpers";

class ClassroomListItem extends Component {
  render() {
    const { classroom } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={classroom.hostPhotoURL} />
              <Item.Content>
                <Item.Header as={Link} to={`/classrooms/${classroom.id}`}>
                  {classroom.title}
                </Item.Header>
                <Item.Description>
                  Hosted by{" "}
                  <Link to={`/profile/${classroom.hostUid}`}>
                    {classroom.hostedBy}
                  </Link>{" "}
                </Item.Description>
                {classroom.cancelled && (
                  <Label
                    style={{ top: "-40px" }}
                    ribbon="right"
                    color="red"
                    content="This classroom has been cancelled"
                  />
                )}
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" />
            {format(classroom.date.toDate(), "EEEE do LLL")} at{" "}
            {format(classroom.date.toDate(), "h:mm a")} |
            <Icon name="marker" /> {classroom.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {classroom.attendees &&
              objectToArray(classroom.attendees).map(attendee => (
                <ClassroomListAttendee key={attendee.id} attendee={attendee} />
              ))}
          </List>
        </Segment>
        <Segment clearing>
          <span>{classroom.description}</span>
          <Button
            as={Link}
            to={`/events/${classroom.id}`}
            color="blue"
            floated="right"
            content="View"
          />
        </Segment>
      </Segment.Group>
    );
  }
}

export default ClassroomListItem;
