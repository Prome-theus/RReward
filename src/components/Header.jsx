import React from 'react';
import { Concert_One } from "next/font/google";
import { UserAuth } from '../app/context/AuthContext';

const concertone = Concert_One({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

const Header = () => {
  const { user, googleSignIn, logOut } = UserAuth();

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="bg-white text-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <a className="flex items-center h-full hover:text-indigo-800 mb-4 md:mb-0">
          <img
            className="m-auto border rounded-[14px]"
            src="Logo.png"
            alt="Logo"
            width={50}
          />
          <div className={concertone.className}>
          <span className="text-center ml-3 text-3xl ">
            REVIEW REWARD
          </span>
          </div>
        </a>

        <div className="flex flex-1 justify-end items-center space-x-4">
          {/* User image and sign out button */}
          {user ? (
            <div className="flex items-center">
              <img
                className="w-8 h-8 rounded-full"
                src={user.photoURL} // Assuming user.photoURL contains the URL of the user's image
                alt="User"
              />
              <span className="ml-2 text-gray-700">{user.displayName}</span>
              <button
                onClick={handleSignOut}
                className="text-gray-700 dark:text-white"
              >
                Sign Out
              </button>
            </div>
          ) : (
            // Login/Signup button
            <a href="/Login" className="text-gray-700 dark:text-white">
              Login/Signup
            </a>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
