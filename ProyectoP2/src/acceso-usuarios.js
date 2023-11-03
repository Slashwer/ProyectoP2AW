// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAblnlW7IK5QykixXVb0WvJLeKSxsmAAWw",
  authDomain: "proyectop2aw.firebaseapp.com",
  projectId: "proyectop2aw",
  storageBucket: "proyectop2aw.appspot.com",
  messagingSenderId: "76327768339",
  appId: "1:76327768339:web:cdb18546f8ce332d924ae6"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;