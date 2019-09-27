import React from "react";
import "./App.css";
import Navmenu from "../navmenu/navmenu.jsx";

function App() {
  return (
    <div className="App">
      <Navmenu />
      <header className="App-header">
        <p>Welcome to UWinMaps!</p>
        <p>Find Your Class or Examroom including Accessible Routes!</p>
        <p>Find Your Favourite Item In The Bookstore!</p>
        <p>Find Resources On Campus</p>
      </header>
    </div>
  );
}

export default App;
