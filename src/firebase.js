import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBmoPgT1849Ah7pBmSpD2NQRhBxNfncjT0",
    authDomain: "tinder-clone-c1c77.firebaseapp.com",
    databaseURL: "https://tinder-clone-c1c77.firebaseio.com",
    projectId: "tinder-clone-c1c77",
    storageBucket: "tinder-clone-c1c77.appspot.com",
    messagingSenderId: "154153112258",
    appId: "1:154153112258:web:0d763c9db0186eea5d215b",
    measurementId: "G-W0PTS14ZKX"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;