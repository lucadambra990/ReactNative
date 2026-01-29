// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2FaIazQd1VCLKbaqsRlo_t9zILayX-xE",
  authDomain: "user-crud-aa219.firebaseapp.com",
  projectId: "user-crud-aa219",
  storageBucket: "user-crud-aa219.firebasestorage.app",
  messagingSenderId: "1075728684986",
  appId: "1:1075728684986:web:d9b00f01d69e0716772f83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {app, db, auth}