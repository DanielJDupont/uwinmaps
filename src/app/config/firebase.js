import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "uwinmaps.firebaseapp.com",
  databaseURL: "https://uwinmaps.firebaseio.com",
  projectId: "uwinmaps",
  storageBucket: "uwinmaps.appspot.com",
  messagingSenderId: "21812558363",
  appId: process.env.REACT_APP_FIREBASE_API_ID,
  measurementId: "G-W1BJENHJMW"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
