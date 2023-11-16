// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANWxc1yPmSnFiEvcsWwxuDLkebPSs9NYg",
  authDomain: "login-curso-expo-af418.firebaseapp.com",
  projectId: "login-curso-expo-af418",
  storageBucket: "login-curso-expo-af418.appspot.com",
  messagingSenderId: "1013030474094",
  appId: "1:1013030474094:web:2f9d7ac0c6e46d35f8b17f"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);