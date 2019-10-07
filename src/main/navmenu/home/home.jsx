import React from "react";

// Components
import MainCarousel from "./maincarousel/maincarousel";
import InfoJumbotron from "./infojumbotron/infojumbotron";
import Accordion from "./accordion/accordian";
import RoomSearch from "./roomsearch/roomsearch";

// JSON
import buildingsAndRooms from "./buildingsandrooms.json";

function HomePage() {
  return (
    <div>
      <MainCarousel />
      <InfoJumbotron />
      <RoomSearch />
      <Accordion {...buildingsAndRooms} />
      <InfoJumbotron />
    </div>
  );
}

export default HomePage;
