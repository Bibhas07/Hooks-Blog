import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi3eqcuRhVU937KohPbl4Yp75vx0rHEWM",
  authDomain: "react-hooks-blog-9c591.firebaseapp.com",
  projectId: "react-hooks-blog-9c591",
  storageBucket: "react-hooks-blog-9c591.appspot.com",
  messagingSenderId: "513983268136",
  appId: "1:513983268136:web:568541b79d78f489f5bc1d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore()