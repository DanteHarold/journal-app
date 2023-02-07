// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCSwZAIw_8NSWjjf8sOdqlWtgO426-tts",
  authDomain: "react-curso-64fe5.firebaseapp.com",
  projectId: "react-curso-64fe5",
  storageBucket: "react-curso-64fe5.appspot.com",
  messagingSenderId: "702990833386",
  appId: "1:702990833386:web:418b5d13b1baa35570a993",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
