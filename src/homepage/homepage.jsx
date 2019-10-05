import React from "react";
import Navmenu from "./navmenu/navmenu";
import MainCarousel from "./maincarousel/maincarousel";
import InfoJumbotron from "./infojumbotron/infojumbotron";
import BuildingAccordion from "./buildingaccordion/buildingaccordion";
import RoomSearch from "./roomsearch/roomsearch";

function HomePage() {
  return (
    <div>
      <Navmenu />
      <MainCarousel />
      <InfoJumbotron />
      <RoomSearch />
      <BuildingAccordion />
      <InfoJumbotron />
    </div>
  );
}

export default HomePage;
