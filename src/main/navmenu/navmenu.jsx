import React from "react";

// Components
import HomePage from "./homepage/homepage";

// Router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function NavMenu() {
  return (
    <div>
      <Router>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="https://www.uwinmaps.com/">
            UWinMaps
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/aboutus">
                  About Us
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/events">
                  Events
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/resources">
                  Resources
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/aboutus">
            <p>About Us!</p>
          </Route>
          <Route path="/events">
            <p>Events!</p>
          </Route>
          <Route path="/resources">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default NavMenu;
