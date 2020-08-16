import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./global-styles";
import App from "./App";
import { FirebaseContext } from "./context/firebase";

const config = {
  apiKey: "AIzaSyAhiPpFAgZPEMmf1ff80seAY33KBJNTk3Q",
  authDomain: "netflixmovie-b307e.firebaseapp.com",
  databaseURL: "https://netflixmovie-b307e.firebaseio.com",
  projectId: "netflixmovie-b307e",
  storageBucket: "netflixmovie-b307e.appspot.com",
  messagingSenderId: "868206171862",
  appId: "1:868206171862:web:be8546c77e3b0566f19b77"
};

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase: window.firebase }}>
    <GlobalStyles />
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);