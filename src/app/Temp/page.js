import React from "react";

const Page = () => {
    return (
        <div className="grid grid-cols-2 h-screen">
            <div className="col-span-1 bg-orange-300">
                <img src="https://images.unsplash.com/photo-1495296231482-75620171f758?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Girl in a jacket" className="h-full w-full" />
            </div>
            <div className="col-span-1 bg-grey-700">
                <div className="flex flex-col items-center justify-center m-6 ">
                    <div className="text-white text-4xl m-5">LOGO</div>
                    <div className="text-white text-lg m-5 mb-20">Journey to a trillion miles starts from here!!</div>
                    <div className="border rounded-xl w-1/3 bg-blue-800  flex flex-col items-center justify-evenly text-white mt-6 h-full">
                        <div className="font-bold text-2xl mt-4">
                            Signup
                        </div>
                        <div className="mb-10 mt-3">choose a sign up method</div>
                        <button className="border border-white rounded-lg p-3 m-2 w-4/5 flex item-center justify-center">
                             <img src="google.png" className="w-6 h-6 mr-3" /><p>Sign up with Google</p>

                        </button>
                        <button className="border border-white rounded-lg p-3 m-2 w-4/5 flex item-center justify-center">
                             <img src="google.png" className="w-6 h-6 mr-3" /><p>Sign up with Email</p>
                        </button>

                        <div className="mt-10 mb-5">Already a user? <span className="underline text-blue-500"> Log in</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
