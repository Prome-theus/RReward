import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBeS7flVSqNPekUUUFaYVfcURmPOxF0yXA",
    authDomain: "rreward-a82b8.firebaseapp.com",
    projectId: "rreward-a82b8",
    storageBucket: "rreward-a82b8.appspot.com",
    messagingSenderId: "655366098459",
    appId: "1:655366098459:web:9fe81e07191dca405b72be"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


const db = getFirestore(app);
export {db};


