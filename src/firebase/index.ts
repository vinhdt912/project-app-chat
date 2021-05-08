import firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

// Replace this with your Firebase SDK config snippet
const firebaseConfig = {
  apiKey: "AIzaSyDjjCCrmxJox2PtUfo_Er9T-2lQHfREJ4U",
  authDomain: "chat-app-cb677.firebaseapp.com",
  databaseURL: "https://chat-app-cb677.firebaseio.com",
  projectId: "chat-app-cb677",
  storageBucket: "chat-app-cb677.appspot.com",
  messagingSenderId: "962537054681",
  appId: "1:962537054681:web:d495625a9eb71d94cab9c8",
  measurementId: "G-7E0YP09NSP",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
