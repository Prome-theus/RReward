"use client";
import React from 'react';
import StepWizard from '../components/StepWizard';

// import firebase from 'firebase/app';
// import 'firebase/auth';
// import firebaseConfig from './firebaseConfig'; // Path to your firebaseConfig.js file

// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
// }

import { Herr_Von_Muellerhoff } from 'next/font/google';




const steps = [
  { title: 'STEP 1: LOGIN TO OUR REVIEW REWARD WEBSITE', description: 'SIGN IN AND GET VERIFIED ', buttonName: 'SIGN UP', route: '/Login' },
  { title: 'STEP 2: GIVE REVIEW COLLECT REWARD POINTS  ', description: 'GIVE REVIEW FOR SERVICES AND PRODUCTS AND GET REWARD POINTS', buttonName: 'POST REVIEW', route: '/PostReview' },
  { title: 'STEP 3: COLLECT EXCITING REWARDS', description: 'CONVERT YOUR REVIEW POINTS INTO EXCITING REWARDS', buttonName: 'REWARD STORE', route: '/MarketPlace' },
];


// Array of brand logos in image format
const brandLogos = [
  'logo.png',
  'logo.png',
  'logo.png',
  'logo.png',
  'logo.png',
  'logo.png',
  'logo.png',
  'logo.png',
  'logo.png',
  'logo.png',
  // Add more image paths as needed
];

const Page = () => {
  return (
    <main className="flex flex-col items-center">
      <div className='dark:text-white text-8xl font-bold p-4 rounded-lg flex items-center justify-center'>
        GIVE REVIEW.
      </div>
    
      <div className='dark:text-white text-8xl font-bold p-4 rounded-lg flex items-center justify-center'>
        TAKE REWARD.
      </div>
    
      <div className='items-center justify-center flex font-bold text-xl dark:text-white'>EVERY REVIEW YOU POST COMES WITH EXCITING PRIZES</div>
    
      <div className='items-center justify-center flex font-bold text-xl mb-1 dark:text-white'> SO WHAT'S STOPPING YOU </div>
    
      <div className="flex items-center mt-4 justify-center mb-3">
        <a href="/PostReview" className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded dark:bg-white dark:text-black ">
          Get Started
        </a>
      </div>
 
      <div className="container items-center mt-4 justify-center mb-3">
        <StepWizard steps={steps} />
      </div> 
    
      {/* <div className="bg-gray-200 dark:bg-white mb-4 h-screen flex">
        {/* Brand Carousel */}
        {/* <BrandCarousel brandLogos={brandLogos} /> */}
      {/* </div> */} 

      <div className=" justify-center h-screen">
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
              REWARD FOR REVIEW
            </h2>
            <p className="mb-4">
            Compose a detailed review outlining your experience with the product, covering its performance, durability, ease of use, and any other pertinent factors. Offer genuine insights to aid potential buyers in making informed decisions.
            </p>
            
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="reward image.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="review.jpg"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
      <section className=" dark:bg-gray-800">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
              Helping users for better shopping and product experience
              <span className="font-extrabold"></span> 
              
            </h2>
            <p className="mb-4 font-light">
              Exciting rewards for every review you post.
              Reward Review makes the service provider understand the customers and the reponse of the users on the products.
            </p>
            <p className="mb-4 font-medium"
            ></p>
            <a
              href="/AboutUs"
              className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
            >
              Learn more
              <svg
                className="ml-1 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section> 
      </div>
    </main>
  );
}

export default Page;