import React from "react";
// import SignInWithGoogle from "@/src/components/signin";

const page = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="container max-w-screen-sm mx-auto">
          <div>
            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-xl grid-cols-1 md:grid-cols-5">
                  {/* <SignInWithGoogle/> */}
                  <h2 className=" md:col-span-5 font-bold text-3xl text-center text-gray-900">Please Login</h2>

                  <div className="md:col-span-5">
                    <div className="bg-blue-500 text-white rounded-md p-2 text-sm text-center m-2">
                      sign in with google
                    </div>
                  </div>
                  <div className="md:col-span-5 text-center">or</div>
                  <div className="md:col-span-5">
                    <div className="bg-blue-500 text-white rounded-md p-2 text-sm text-center m-2">
                      sign in with google
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
