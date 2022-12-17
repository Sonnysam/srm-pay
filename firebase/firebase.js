import * as firebase from "firebase";
import "firebase/firestore";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjhE7fFmAQ9F5vlJ8bNQTRmkgvw_45nMs",
  authDomain: "srm-pay-94067.firebaseapp.com",
  projectId: "srm-pay-94067",
  storageBucket: "srm-pay-94067.appspot.com",
  messagingSenderId: "1059674677858",
  appId: "1:1059674677858:web:009c2abbbef49727eba73b",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };

// firebase version: 8.2.3
// "firebase": ^9.14.0,
//npm install firebase
