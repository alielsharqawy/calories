// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyBDCvyzgZARW0yNfjBJnQHe2vqwMeMn5X8",
  authDomain: "calories-300c9.firebaseapp.com",
  projectId: "calories-300c9",
  storageBucket: "calories-300c9.firebasestorage.app",
  messagingSenderId: "69403822581",
  appId: "1:69403822581:web:c970299706e7b3f9c3f8bc",
  measurementId: "G-MXQHE1K4HD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
