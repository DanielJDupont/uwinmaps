import React from "react";

// Components, which are the web pages in this case.
import Home from "./home/home";
import AboutUs from "./aboutus/aboutus";
import Events from "./events/events";
import Resources from "./resources/resources";
import Register from "./register/register";
import Login from "./login/login";
import Bookstore from "./bookstore/bookstore";

// Router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Google Login State
import { auth } from "../../firebase/firebase.utils";

/*
This component does need some state:
We need to track which item in the menu is currently selected.
*/

class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      active: false
    };
  }

  // Helps to stop memory leaks.
  unsubscribeFromAuth = null;

  // Just want to know when the firebase authenticate state has changed.
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  // Helps to stop memory leaks.
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  toggleNavMenuOptionActivity() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  render() {
    return (
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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only"></span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/bookstore">
                  Shop
                  <span class="sr-only"></span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/events">
                  Events
                  <span class="sr-only"></span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/resources">
                  Resources
                  <span class="sr-only"></span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/aboutus">
                  About Us
                  <span class="sr-only"></span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/register">
                  Register
                  <span class="sr-only"></span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/login">
                  Login
                  <span class="sr-only"></span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route path="/bookstore">
            <Bookstore />
          </Route>
          <Route path="/aboutus">
            <AboutUs />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/resources">
            <Resources />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default NavMenu;
