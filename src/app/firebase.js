// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCQ_HOkUpX-P0Qrzb3S6WbyfaQMhc2eg6Q",
    authDomain: "reviewreward-c661b.firebaseapp.com",
    projectId: "reviewreward-c661b",
    storageBucket: "reviewreward-c661b.appspot.com",
    messagingSenderId: "1160399238",
    appId: "1:1160399238:web:011f4ef813da2d0d378407"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
