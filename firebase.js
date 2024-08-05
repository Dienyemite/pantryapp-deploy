// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics"
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYzvzGoAxDr4s5Eyxbt0czTS7_x_REpR8",
  authDomain: "pantryapp-5a781.firebaseapp.com",
  projectId: "pantryapp-5a781",
  storageBucket: "pantryapp-5a781.appspot.com",
  messagingSenderId: "106292191553",
  appId: "1:106292191553:web:f7b78c5af0f2700eea41c0",
  measurementId: "G-76QP75J43D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Initialize other Firebase services
export const firestore = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage(app);
