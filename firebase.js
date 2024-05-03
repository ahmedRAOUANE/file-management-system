import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBXyS0dWiap6I7cCEilsjiTO50V40ApRYM",
    authDomain: "file-management-system-7dd5c.firebaseapp.com",
    projectId: "file-management-system-7dd5c",
    storageBucket: "file-management-system-7dd5c.appspot.com",
    messagingSenderId: "441349483213",
    appId: "1:441349483213:web:c382f01a7e1ce947ab1784",
    measurementId: "G-LY07SXTC0J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage();