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

// Cloud Firestore
import { firestore } from "../../firebase/firebase.utils";

// Import Data Query File
import TimesList from "./databasecall";

/*
This component does need some state:
We need to track which item in the menu is currently selected.
*/

// Would be nice to rewrite this with hooks.
// Can just use hooks for all future components.
class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      active: false,
      storedCity: null
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
    var citiesRef = firestore.collection("cities");

    citiesRef.doc("SF").set({
      name: "San Francisco",
      state: "CA",
      country: "USA",
      capital: false,
      population: 860000,
      regions: ["west_coast", "norcal"]
    });
    citiesRef.doc("LA").set({
      name: "Los Angeles",
      state: "CA",
      country: "USA",
      capital: false,
      population: 3900000,
      regions: ["west_coast", "socal"]
    });
    citiesRef.doc("DC").set({
      name: "Washington, D.C.",
      state: null,
      country: "USA",
      capital: true,
      population: 680000,
      regions: ["east_coast"]
    });
    citiesRef.doc("TOK").set({
      name: "Tokyo",
      state: null,
      country: "Japan",
      capital: true,
      population: 9000000,
      regions: ["kanto", "honshu"]
    });
    citiesRef.doc("BJ").set({
      name: "Beijing",
      state: null,
      country: "China",
      capital: true,
      population: 21500000,
      regions: ["jingjinji", "hebei"]
    });

    // Call SF from database.
    let docRef = firestore.collection("cities").doc("SF");
    docRef
      .get()
      .then(function(doc) {
        if (doc.exists) {
          this.setState({ storedCity: doc.data() });
          console.log("Document data:", doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });

    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
              <li class="nav-item">
                {/* Need to fix UWinMaps this highlighting */}
                <div class="nav-link">
                  UWinMaps
                  <span class="sr-only"></span>
                </div>
              </li>

              <li class="nav-item active">
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only"></span>
                </Link>
              </li>

              {/* <li class="nav-item">
                <Link class="nav-link" to="/register">
                  Register
                  <span class="sr-only"></span>
                </Link>
              </li> */}
              <TimesList />

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
                  About
                  <span class="sr-only"></span>
                </Link>
              </li>

              {/* <li class="nav-item">
                <Link class="nav-link" to="/login">
                  Login
                  <span class="sr-only"></span>
                </Link>
              </li> */}

              <li class="nav-item">
                {this.state.currentUser ? (
                  // Sign Out
                  <div class="nav-link">
                    <div onClick={() => auth.signOut()}>Sign Out</div>
                  </div>
                ) : (
                  // Sign In
                  <Link class="nav-link" to="/login">
                    Sign In
                    <span class="sr-only"></span>
                  </Link>
                )}
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
