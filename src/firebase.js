import firebase from 'firebase/compat/app';
import "firebase/compat/auth"

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyAhHLgFiXH-V5WFCIYGnc3BUiNSIGI53nU",
  authDomain: "schat-8bfbd.firebaseapp.com",
  projectId: "schat-8bfbd",
  storageBucket: "schat-8bfbd.appspot.com",
  messagingSenderId: "508906255620",
  appId: "1:508906255620:web:6e69d02cf0d171c16d8c51"
}).auth();