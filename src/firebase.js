import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAlc-RpaEslNSlDdZwHB5udyAuot3O-mQk",
  authDomain: "clone-289d7.firebaseapp.com",
  projectId: "clone-289d7",
  storageBucket: "clone-289d7.appspot.com",
  messagingSenderId: "554848358575",
  appId: "1:554848358575:web:004bbeb70e6318d879445a",
  measurementId: "G-CBSTCTR104",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseAPp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
