// Only need to use the app portion of firebase
import "firebase/firestore";
import "firebase/auth";

import firebase from "firebase/app";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "uwinmaps.firebaseapp.com",
  databaseURL: "https://uwinmaps.firebaseio.com",
  projectId: "uwinmaps",
  storageBucket: "uwinmaps.appspot.com",
  messagingSenderId: "21812558363",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: "G-W1BJENHJMW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () =>
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function(result) {})
    .catch(function(error) {});

export default firebase;

// Adding to database examples:
// citiesRef.doc("SF").set({
//   name: "San Francisco",
//   state: "CA",
//   country: "USA",
//   capital: false,
//   population: 860000,
//   regions: ["west_coast", "norcal"]
// });
// citiesRef.doc("LA").set({
//   name: "Los Angeles",
//   state: "CA",
//   country: "USA",
//   capital: false,
//   population: 3900000,
//   regions: ["west_coast", "socal"]
// });
// citiesRef.doc("DC").set({
//   name: "Washington, D.C.",
//   state: null,
//   country: "USA",
//   capital: true,
//   population: 680000,
//   regions: ["east_coast"]
// });
