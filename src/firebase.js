import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyAeej6UWlqevf9-3sr5cNJXRHK5Uy_nzXo",
  authDomain: "slack-a8cd1.firebaseapp.com",
  databaseURL: "https://slack-a8cd1.firebaseio.com",
  projectId: "slack-a8cd1",
  storageBucket: "slack-a8cd1.appspot.com",
  messagingSenderId: "683757217646"
};
firebase.initializeApp(config);

export default firebase;
