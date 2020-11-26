import firebase from "firebase";

let firebaseConfig = {
  apiKey: "AIzaSyAy7DLpFaGdfQ-pciWW5fUTQ4z4oAAkq0g",
  authDomain: "react-todo-app-32294.firebaseapp.com",
  databaseURL: "https://react-todo-app-32294.firebaseio.com",
  projectId: "react-todo-app-32294",
  storageBucket: "react-todo-app-32294.appspot.com",
  messagingSenderId: "1001705221306",
  appId: "1:1001705221306:web:68c7b3aaa0735e23d2e683",
};

firebase.initializeApp(firebaseConfig);

export const fb = firebase.firestore();
