import React from "react";

// Components
import MainCarousel from "./maincarousel/maincarousel";
import InfoJumbotron from "./infojumbotron/infojumbotron";
import Accordion from "./accordion/accordian";
import RoomSearch from "./roomsearch/roomsearch";
// import SpringChain from './springchain/springchain';

function HomePage() {
  return (
    <div>
      <MainCarousel />
      <InfoJumbotron />
      <RoomSearch />
      <Accordion />
      <InfoJumbotron />
    </div>
  );
}

export default HomePage;
