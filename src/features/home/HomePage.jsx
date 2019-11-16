import React from "react";
import {
  Segment,
  Container,
  Image,
  Button,
  Icon,
  Header
} from "semantic-ui-react";

const HomePage = () => {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text>
        <Header as="h1" inverted>
          <Icon name="yellow large map outline" inverted />
          UWinMaps
        </Header>
        <Button size="huge" inverted>
          Get started
          <Icon name="right arrow" inverted />
        </Button>
      </Container>
    </Segment>
  );
};

export default HomePage;
