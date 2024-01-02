import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBWVS_ql2KI5t7yFwurImqO2ekNAriHfM4",
  authDomain: "fireapp-f475d.firebaseapp.com",
  projectId: "fireapp-f475d",
  storageBucket: "fireapp-f475d.appspot.com",
  messagingSenderId: "373258705548",
  appId: "1:373258705548:web:17cc4a2b11d4f029bcb9a9",
  measurementId: "G-J6C9SDYZDP",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
