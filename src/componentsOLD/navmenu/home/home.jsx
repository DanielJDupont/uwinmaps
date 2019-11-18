import React from 'react';

// Components
import SimpleMap from '../outdoormap/outdoormap';
import MainCarousel from './maincarousel/maincarousel';
import InfoJumbotron from './infojumbotron/infojumbotron';
import Accordion from './accordion/accordian';
import RoomSearch from './roomsearch/roomsearch';
import RoomAdder from './roomadder/form';

// import SpringChain from './springchain/springchain';

function HomePage() {
  return (
    <div>
      <SimpleMap />
      <MainCarousel />
      <InfoJumbotron />
      <RoomAdder />
      <RoomSearch />
      <Accordion />
      <InfoJumbotron />
    </div>
  );
}

export default HomePage;