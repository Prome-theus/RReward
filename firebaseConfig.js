import { initializeApp } from "firebase/app";
<<<<<<< HEAD
import { getFirestore } from "firebase/firestore"
=======
import { getAnalytics } from "firebase/analytics";
>>>>>>> refs/remotes/origin/main
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

<<<<<<< HEAD
=======
// Initialize Firebase
>>>>>>> refs/remotes/origin/main
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


<<<<<<< HEAD
const db = getFirestore(app);
export {db};

=======
>>>>>>> refs/remotes/origin/main

