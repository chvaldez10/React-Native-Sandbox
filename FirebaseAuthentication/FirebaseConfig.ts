// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAXRJ_Mj0sHAB4B_iwXXLcyinCt8WuOFXE",
  authDomain: "react-native-auth-f0e3a.firebaseapp.com",
  projectId: "react-native-auth-f0e3a",
  storageBucket: "react-native-auth-f0e3a.appspot.com",
  messagingSenderId: "969823325942",
  appId: "1:969823325942:web:4d72926630ba63251fe6d7",
  measurementId: "G-1R8WKFCE6Y",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DV = getFirestore(FIREBASE_APP);
