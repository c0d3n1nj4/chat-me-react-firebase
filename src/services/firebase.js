import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const config = {
  apiKey: "YOUR INFO HERE",
  authDomain: "YOUR INFO HERE",
  databaseURL: "YOUR INFO HERE"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database(); 