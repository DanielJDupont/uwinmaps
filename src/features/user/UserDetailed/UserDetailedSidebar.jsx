import React from "react";
import { Button, Grid, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

const UserDetailedSidebar = ({
  isCurrentUser,
  unfollowUser,
  followUser,
  profile,
  isFollowing
}) => {
  return (
    <Grid.Column width={4}>
      <Segment>
        {isCurrentUser && (
          <Button
            as={Link}
            to="/settings"
            color="blue"
            fluid
            basic
            content="Edit Profile"
          />
        )}

        {!isCurrentUser && !isFollowing && (
          <Button
            onClick={() => followUser(profile)}
            color="blue"
            fluid
            basic
            content="Follow User"
          />
        )}

        {!isCurrentUser && isFollowing && (
          <Button
            onClick={() => unfollowUser(profile)}
            color="blue"
            fluid
            basic
            content="Unfollow"
          />
        )}
      </Segment>
    </Grid.Column>
  );
};

export default UserDetailedSidebar;
