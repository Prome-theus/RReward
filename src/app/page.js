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


const leaders = [
  { name: 'John Doe', score: 500 },
  { name: 'Jane Smith', score: 450 },
  { name: 'Alice Johnson', score: 400 },
  { name: 'Bob Brown', score: 350 },
];

const steps = [
  { title: 'STEP 1: LOGIN TO OUR REVIEW REWARD WEBSITE', description: 'SIGN IN AND GET VERIFIED ', buttonName: 'SIGN UP', onClick: () =>console.log('Step 2 clicked') },
  { title: 'STEP 2: GIVE REVIEW COLLECT REWARD POINTS  ', description: 'GIVE REVIEW FOR SERVICES AND PRODUCTS AND GET REWARD POINTS', buttonName: 'POST REVIEW', onClick: () => console.log('Step 2 clicked') },
  { title: 'STEP 3: COLLECT EXCITING REWARDS', description: 'CONVERT YOUR REVIEW POINTS INTO EXCITING REWARDS', buttonName: 'REWARD STORE', onClick: () => console.log('Step 3 clicked') },
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
        <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded dark:bg-white dark:text-black ">
          Get Started
        </button>
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
              We didn't reinvent the wheel
            </h2>
            <p className="mb-4">
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough need.
            </p>
            <p>We are strategists, design.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
      </div>
    </main>
  );
}

export default Page;