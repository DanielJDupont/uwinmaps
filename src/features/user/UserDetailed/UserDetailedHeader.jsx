import React from "react";
import { Grid, Header, Item, Segment } from "semantic-ui-react";
import differenceInCalendarYears from "date-fns/differenceInCalendarYears";

const UserDetailedHeader = ({ profile }) => {
  let age;
  if (profile.dateOfBirth) {
    age = differenceInCalendarYears(Date.now(), profile.dateOfBirth.toDate());
  } else {
    age = "unknown age";
  }

  return (
    <Grid.Column width={16}>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image
              avatar
              size="small"
              src={profile.photoURL || "/assets/user.png"}
            />
            <Item.Content verticalAlign="bottom">
              <Header as="h1">{profile.displayName}</Header>
              <br />
              <Header as="h3">{profile.occupation}</Header>
              <br />
              <Header as="h3">
                {age}, Lives in {profile.city || "unknown city"}
              </Header>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    </Grid.Column>
  );
};

export default UserDetailedHeader;
