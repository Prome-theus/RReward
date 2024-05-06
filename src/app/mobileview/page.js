import React from "react";

const Page = () => {
  return (
    <div className="grid grid-rows-2 h-screen text-white">
      <div
        className="rows-span-1 flex justify-center items-center"
        style={{
          backgroundImage: "url(bgimg.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "left",
          height: "440px",
        }}
      >
        <div className="flex flex-col items-center justify-center">

        <div className="mt-[100px]"> <img src="Halwailogo.png" className="w-[80px] h-[37]"/> </div>
        <div className="text-[12px]">Journey to a trillion miles starts from here!!</div>

        </div>

      </div>
      <div className="rows-span-1 bg-[#192734] rounded-t-[20px]">
        <div className="flex flex-col items-center justify-center">
          <div className="mt-6 text-xl font-semibold">Sign Up</div>
          <div className="my-3">Choose a sign up method</div>
          <button className="border border-white rounded-lg p-2 m-2 w-11/12 flex item-center justify-center text-[16px]">
            <img src="google.png" className="w-6 h-6 mr-3" />
            <p>Sign up with Google</p>
          </button>
          <button className="border border-white rounded-lg p-2 m-2 w-11/12 flex item-center justify-center text-[16px]">
            <img src="google.png" className="w-6 h-6 mr-3" />
            <p>Sign up with Email</p>
          </button>
        </div>
        <div className="flex"></div>
      <div className="flex items-center justify-center mt-16">Already a user ?<span className="undeline text-blue-500 ml-1"> Log in</span></div>
      </div>
    </div>
  );
};

export default Page;
