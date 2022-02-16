// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5SRZANlJJSfh77p1wkuL1a4goW-IMHNU",
  authDomain: "pedro-blog-firebase.firebaseapp.com",
  projectId: "pedro-blog-firebase",
  storageBucket: "pedro-blog-firebase.appspot.com",
  messagingSenderId: "1042160416228",
  appId: "1:1042160416228:web:a51f38aa922836a5b803f1",
  measurementId: "G-YP5J8JMGFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();