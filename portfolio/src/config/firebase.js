// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiu8aqZ1b_uRiKfP0pH_4ubnZoosDBSR0",
  authDomain: "portfolio-mallory.firebaseapp.com",
  projectId: "portfolio-mallory",
  storageBucket: "portfolio-mallory.firebasestorage.app",
  messagingSenderId: "602853237239",
  appId: "1:602853237239:web:cfe5258ea685a362d7cef2",
  measurementId: "G-D62KNKK7D3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app)