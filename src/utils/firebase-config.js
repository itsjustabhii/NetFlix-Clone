// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBgTRsSXvJHDFI7eJPv07P0GXj-TLKeQ8",
  authDomain: "netflix-react-clone-d9d09.firebaseapp.com",
  projectId: "netflix-react-clone-d9d09",
  storageBucket: "netflix-react-clone-d9d09.appspot.com",
  messagingSenderId: "445474290958",
  appId: "1:445474290958:web:dc45d0b17efa462e97eb5f",
  measurementId: "G-3XXMVCKJ8X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)