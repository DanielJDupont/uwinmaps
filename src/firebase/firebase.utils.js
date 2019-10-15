// Only need to use the app portion of firebase
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCYo-d-AdY26S8ZfdVbSan5dqBEfyxBg5Y",
  authDomain: "uwinmaps.firebaseapp.com",
  databaseURL: "https://uwinmaps.firebaseio.com",
  projectId: "uwinmaps",
  storageBucket: "uwinmaps.appspot.com",
  messagingSenderId: "21812558363",
  appId: "1:21812558363:web:bc8ad2cc744afc03c016be",
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
