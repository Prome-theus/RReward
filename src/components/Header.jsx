"use client"
import React from 'react';
import { UserAuth } from '../app/context/AuthContext';

const Header = () => {
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
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex items-center hover:text-indigo-800 mb-4 md:mb-0">
          <img
            className="m-auto border rounded-[14px]"
            src="Logo.png"
            alt="Logo"
            width={50}
          />
          <span className="center ml-3 text-3xl font-semibold text-black dark:text-white">
            REVIEW REWARD
          </span>
        </a>

        <div className="flex flex-1 justify-end items-center space-x-4">
          {/* User image */}
          

          {/* Login/Signup button */}
         
          
          {!user ? <a href='/Login' className="text-gray-700 dark:text-white">
            Login/Signup
          </a>:<div><a href='/DashBoard' className="flex-shrink-0">
            <img
              className="w-8 h-8 rounded-full"
              src="/user.png" // Add your user image source
              alt="User"
            />
          </a>welcome, {user.displayName} <button onClick={handleSignOut} className="text-gray-700 dark:text-white">
            Sign Out
          </button></div> }
          
        </div>
      </div>
    </header>
  );
};

export default Header;