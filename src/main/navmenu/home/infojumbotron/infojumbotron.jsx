import React from "react";

function InfoJumbotron() {
  return (
    <div>
      <div class="jumbotron">
        <h1 class="display-4">UWinMaps</h1>
        <p class="lead">Find Anything!</p>
        <hr class="my-4" />
        <p>
          <p>Welcome to UWinMaps!</p>
          <p>Find Your Class or Examroom including Accessible Routes!</p>
          <p>Find Your Favourite Item In The Bookstore!</p>
          <p>Find Resources On Campus</p>
        </p>
        <p class="lead">
          <a
            class="btn btn-primary btn-lg"
            href="https://www.uwinmaps.com"
            role="button"
          >
            Find It!
          </a>
        </p>
      </div>
    </div>
  );
}

export default InfoJumbotron;
