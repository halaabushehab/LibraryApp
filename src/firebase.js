// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // قاعدة بيانات Firestore
import { getDatabase } from "firebase/database"; // قاعدة بيانات Realtime Database

// Firebase config (replace with your Firebase project's config)
const firebaseConfig = {
    apiKey: "AIzaSyBDcxzNCPzEwXRdhvsHWiDS05s7NIxJRvQ",
    authDomain: "myproject-bd31d.firebaseapp.com",
    databaseURL: "https://myproject-bd31d-default-rtdb.firebaseio.com",
    projectId: "myproject-bd31d",
    storageBucket: "myproject-bd31d.firebasestorage.app",
    messagingSenderId: "741804666337",
    appId: "1:741804666337:web:b664185cba55c2ffc636a0",
    measurementId: "G-92LD12HSF5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app); // إذا كنت تحتاج إلى Realtime Database

export { auth, db, database };
