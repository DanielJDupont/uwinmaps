import React from "react";
import { Segment, Grid, Icon, Button } from "semantic-ui-react";

export const EventDetailedInfo = () => {
  return (
    <div>
      <Segment.Group>
        <Segment attached="top">
          <Grid>
            <Grid.Column width={1}>
              <Icon size="large" color="blue" name="info" />
            </Grid.Column>
            <Grid.Column width={15}>
              <p>Description of Event</p>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment attached>
          <Grid verticalAlign="middle">
            <Grid.Column width={1}>
              <Icon name="calendar" size="large" color="blue" />
            </Grid.Column>
            <Grid.Column width={15}>
              <span>Event Date</span>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment attached>
          <Grid verticalAlign="middle">
            <Grid.Column width={1}>
              <Icon name="marker" size="large" color="blue" />
            </Grid.Column>
            <Grid.Column width={11}>
              <span>Event Venue</span>
            </Grid.Column>
            <Grid.Column width={4}>
              <Button color="blue" size="tiny" content="Show Map" />
            </Grid.Column>
          </Grid>
        </Segment>
      </Segment.Group>
    </div>
  );
};
