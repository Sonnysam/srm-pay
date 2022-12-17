import * as firebase from "firebase";
import "firebase/firestore";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDznbLMFmFxLvPS0XB1ytoj7q0H54aMsMA",
  authDomain: "srm-pay.firebaseapp.com",
  projectId: "srm-pay",
  storageBucket: "srm-pay.appspot.com",
  messagingSenderId: "380201047463",
  appId: "1:380201047463:web:3ed4571ea016d86afc1282",
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
