"use client"
import { useContext,createContext,useEffect,useState } from "react";
import { signInWithPopup, signOut , onAuthStateChanged , GoogleAuthProvider } from "firebase/auth";
import { Auth, auth } from '../firebase';
import { setUserId } from "firebase/analytics";

const Authcontext=createContext()

export const AuthContextProvider=({children})=>{
    const [user,SetUser]=useState(null);
    const googleSignIn=async ()=>{
        const Provider=new GoogleAuthProvider();
        
        const result= await signInWithPopup(auth,Provider);
        console.log(result);
    }

    const logOut=()=>{
        signOut(auth);

    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            SetUser(currentUser);

        });
        return()=>unsubscribe();
    },[user]);



    return (
        <Authcontext.Provider value={{user , googleSignIn,logOut}}>{children}</Authcontext.Provider>
    )


}

export const UserAuth=()=>{
    return useContext(Authcontext)
}