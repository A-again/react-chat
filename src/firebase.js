// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDC3uXgsQBYmEgg_STD2FlAHrIBny2buHg",
  authDomain: "react-chat-be858.firebaseapp.com",
  projectId: "react-chat-be858",
  storageBucket: "react-chat-be858.appspot.com",
  messagingSenderId: "365528369214",
  appId: "1:365528369214:web:9cd4d8fc9bb859bd23696f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);