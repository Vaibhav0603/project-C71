import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBFbMtA1sDz0laBWJ_b7jFkxZowU5vGHe0",
    authDomain: "project-c-71-e3d24.firebaseapp.com",
    projectId: "project-c-71-e3d24",
    storageBucket: "project-c-71-e3d24.appspot.com",
    messagingSenderId: "933389987362",
    appId: "1:933389987362:web:b90ca883886fb6c76ca47b"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
