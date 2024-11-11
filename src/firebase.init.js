// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkfHVrftUjDOFk1HSTcDC86owUR-9gKKw",
  authDomain: "auth-moha-milon-ca784.firebaseapp.com",
  projectId: "auth-moha-milon-ca784",
  storageBucket: "auth-moha-milon-ca784.firebasestorage.app",
  messagingSenderId: "215385728573",
  appId: "1:215385728573:web:61f314c71f6889717aec54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)