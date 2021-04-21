//import * as firebase from 'firebase/app'
import firebase from 'firebase'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAsZ0jg3LWCWkRRAqHdKG5WswkA3BVF8-Y",
    authDomain: "firegram-9fd8e.firebaseapp.com",
    projectId: "firegram-9fd8e",
    storageBucket: "firegram-9fd8e.appspot.com",
    messagingSenderId: "249775693554",
    appId: "1:249775693554:web:4b95ac1b22a0e9df29fa6b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp= firebase.firestore.FieldValue.serverTimestamp();

  export {projectFirestore,projectStorage,timestamp}