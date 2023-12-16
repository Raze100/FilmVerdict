// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection }  from 'firebase/firestore'
// Import the functions you need from the SDKs you need

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiZrQuDDwW1bqfcuH56AwprUPcDvycO7Q",
  authDomain: "filmverdict-be661.firebaseapp.com",
  projectId: "filmverdict-be661",
  storageBucket: "filmverdict-be661.appspot.com",
  messagingSenderId: "864758003853",
  appId: "1:864758003853:web:3b9dbbe4a5e02e85fa8ac4"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  db = getFirestore(app); //connecting the Firebase DB with the project
export const moviesRef = collection(db,"movies"); //getting the movies collection
export const reviewsRef = collection(db,"reviews"); //getting the reviews collection
export const usersRef = collection(db,"users"); //getting the users collection

export default app;