import React from "react";
import { Header, Segment, Feed, Sticky } from "semantic-ui-react";
import ClassroomActivityItem from "./ClassroomActivityItem";

const ClassroomActivity = ({ activities, contextRef }) => {
  return (
    <Sticky context={contextRef} offset={100} styleElement={{ zIndex: 0 }}>
      <Header attached="top" content="Recent Activity" />
      <Segment attached>
        <Feed>
          {activities &&
            activities.map(activity => (
              <ClassroomActivityItem key={activity.id} activity={activity} />
            ))}
        </Feed>
      </Segment>
    </Sticky>
  );
};

export default ClassroomActivity;
