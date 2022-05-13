import firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_KEY,
  authDomain: process.env.REACT_APP_DOMAIN,
  projectId: process.env.REACT_APP_ID,
  databaseURL: process.env.REACT_APP_URL,
  storageBucket: process.env.REACT_APP_BUCKET,
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MESS_ID,
};

firebase.initializeApp(firebaseConfig);
export default firebase;
