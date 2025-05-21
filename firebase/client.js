// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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