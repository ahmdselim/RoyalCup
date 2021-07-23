import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store/reducers/RootReducer";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore"; // <- needed if using firestore
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";
import "firebase/functions";
require("firebase/auth");

const firebaseConfig = {
  apiKey: "#############################",
  authDomain: "#############################",
  databaseURL: "#############################",
  projectId: "#############################",
  storageBucket: "#############################",
  messagingSenderId: "#############################",
  appId: "#############################",
  measurementId: "#############################",
};

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

export const defaultApp = firebase.initializeApp(firebaseConfig);
export const auth = defaultApp.auth();
export const storage = defaultApp.storage();
export const firestore = defaultApp.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export const signInWithGoogle = () => {
  auth
    .signInWithPopup(googleProvider)
    .then((res) => {
      // user object
      console.log("hey Bob");
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const signInWithFacebook = () => {
  auth
    .signInWithPopup(facebookProvider)
    .then((res) => {
      // user object
      console.log("hey Bob");
    })
    .catch((error) => {
      console.log(error.message);
    });
};
// Initialize other services on firebase instance
firebase.firestore(); // <- needed if using firestore

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
};
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
