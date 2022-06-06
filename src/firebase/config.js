import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAdnS1LcngAgB23DCru4P0HxwQfxypnp0E",
  authDomain: "vue-live-chat-87643.firebaseapp.com",
  projectId: "vue-live-chat-87643",
  storageBucket: "vue-live-chat-87643.appspot.com",
  messagingSenderId: "443561074190",
  appId: "1:443561074190:web:6b7f5048131e47d6a1e65f",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const projectAuth = firebase.auth();

export { projectFirestore, timestamp, projectAuth };
