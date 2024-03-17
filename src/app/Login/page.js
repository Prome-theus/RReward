"use client"
import React from "react";
import { UserAuth } from "../context/AuthContext";

const page = () => {

  const {user , googleSignIn,logOut}=UserAuth();
  const handleSignIn= async()=>{
    try{
      await googleSignIn()
    }
    catch(error){
      console.log(error);
    }

  };
  const handleSignOut=async ()=>{
    try {
      await logOut()
    }
    catch(error){
      console.log(error);
    }

  }

  return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="container max-w-screen-sm mx-auto">
          <div>
            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-xl grid-cols-1 md:grid-cols-5">
                  {/* <SignInWithGoogle/> */}
                 
                  {!user ? <div className="md:col-span-5">
                    <div onClick={handleSignIn} className="bg-blue-500 text-white rounded-md p-2 text-sm text-center m-2">
                      sign in with google
                    </div>
                  </div>: <div className="md:col-span-5">
                    <a href="/DashBoard" className="bg-blue-500 text-white rounded-md p-2 text-sm text-center m-2">
                      GO TO DASHBOARD
                    </a>
                  </div>}
                 
                 
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default page;