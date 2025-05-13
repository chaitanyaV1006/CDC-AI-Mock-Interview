// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { FirebaseAuthError } from "firebase-admin/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjw4I7Qffh-UuqADsCAoDfcyBGRk7KLS4",
  authDomain: "cdc-ai-mock-interview.firebaseapp.com",
  projectId: "cdc-ai-mock-interview",
  storageBucket: "cdc-ai-mock-interview.firebasestorage.app",
  messagingSenderId: "264098724608",
  appId: "1:264098724608:web:3630fbfca9be7dd6ea11e5",
  measurementId: "G-CMW7HLQ74C"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth =  getAuth(app);
export const db = getFirestore(app)