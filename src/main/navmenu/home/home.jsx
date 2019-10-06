import React from "react";

// Components
import MainCarousel from "./maincarousel/maincarousel";
import InfoJumbotron from "./infojumbotron/infojumbotron";
import BuildingAccordion from "./buildingaccordion/buildingaccordian";
import RoomSearch from "./roomsearch/roomsearch";

function HomePage() {
  return (
    <div>
      <MainCarousel />
      <InfoJumbotron />
      <RoomSearch />
      <BuildingAccordion />
      <InfoJumbotron />
    </div>
  );
}

export default HomePage;
