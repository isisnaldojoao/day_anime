// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey:  "AIzaSyAnV9cF-sp4aWaxcEskGcYNrERQcL8iWfo",
    authDomain: "reactfirebase-9c4c7.firebaseapp.com",
    projectId: "reactfirebase-9c4c7",
    storageBucket: "reactfirebase-9c4c7.firebasestorage.app",
    messagingSenderId: "272266423317",
    appId: "1:272266423317:web:72025c1f78e1b63176f21c",
    measurementId: "G-QMESC8MPPV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);
