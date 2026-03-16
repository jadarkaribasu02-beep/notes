// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtezvFRAI8n6HExpgfcp69bmtLiohZi4k",
  authDomain: "notes-2be22.firebaseapp.com",
  projectId: "notes-2be22",
  storageBucket: "notes-2be22.firebasestorage.app",
  messagingSenderId: "150199542648",
  appId: "1:150199542648:web:337190692c0df534575e8d",
  measurementId: "G-T12SK0M61D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);