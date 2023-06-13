import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAEQbiGR0YjJRFk_cGDHovLsNFkowUp-lU",
    authDomain: "clone-75014.firebaseapp.com",
    projectId: "clone-75014",
    storageBucket: "clone-75014.appspot.com",
    messagingSenderId: "678720460537",
    appId: "1:678720460537:web:d52484e140f2095a70f428",
    measurementId: "G-4EFJN6G3G4"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
