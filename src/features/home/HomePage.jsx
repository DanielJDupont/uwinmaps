import React from "react";
import {
  Segment,
  Container,
  Image,
  Button,
  Icon,
  Header
} from "semantic-ui-react";
import Confetti from "react-confetti";

const HomePage = ({ history }) => {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Confetti numberOfPieces={10} colors={["yellow"]} opacity={0.1} />
      <Container text>
        <Header as="h1" inverted>
          <Icon name="yellow large map outline" inverted />
          UWinMaps
        </Header>
        <Button onClick={() => history.push("./events")} size="huge" inverted>
          Get Started
          <Icon name="right arrow" inverted />
        </Button>
        <Header as="h2" inverted>
          Find Classrooms, Books, and Events
        </Header>
      </Container>
    </Segment>
  );
};

export default HomePage;
