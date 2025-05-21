// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";  // <-- add this import

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwBGUkO2t2gOc9arec-GTbZAd_GoaxUCw",
  authDomain: "prepwise-60fb2.firebaseapp.com",
  projectId: "prepwise-60fb2",
  storageBucket: "prepwise-60fb2.firebasestorage.app",
  messagingSenderId: "407735168556",
  appId: "1:407735168556:web:d4a7e5280755bb31e32b89",
  measurementId: "G-7QHVTY3S5P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Auth and export it
export const auth = getAuth(app);
