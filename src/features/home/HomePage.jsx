import React, { useState, useEffect } from "react";
import {
  Segment,
  Container,
  Image,
  Button,
  Icon,
  Header,
  Grid,
  Divider
} from "semantic-ui-react";
import Confetti from "react-confetti";
import "./HomePage.css";
import useWindowDimensions from "./WindowHook";

const HomePage = ({ history }) => {
  const { height, width } = useWindowDimensions();

  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Confetti
        numberOfPieces={20}
        colors={["yellow"]}
        opacity={0.15}
        confettiSource={{ x: 0, y: height, w: 3000, h: 0 }}
        gravity={-0.1}
        wind={0}
      />
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
        <Divider inverted />
        <Grid>
          <Grid.Row centered verticalAlign="middle" columns={2}>
            <Grid.Column>
              <Image
                src={
                  "https://firebasestorage.googleapis.com/v0/b/uwinmaps.appspot.com/o/Google-DSC-Logo.png?alt=media&token=95dbf1a7-7846-4b83-bb54-4bbf9aea0039"
                }
                size="medium"
                centered
              ></Image>
            </Grid.Column>
            <Grid.Column>
              <Image
                src={
                  "https://firebasestorage.googleapis.com/v0/b/uwinmaps.appspot.com/o/logo-epicentre-header.png?alt=media&token=04cf045c-491e-4372-9824-42522d774c26"
                }
                size="medium"
                centered
              ></Image>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider inverted />
        <Header as="h3" inverted>
          Created by Andrea Swartz and Daniel Dupont
        </Header>
      </Container>
    </Segment>
  );
};

export default HomePage;
