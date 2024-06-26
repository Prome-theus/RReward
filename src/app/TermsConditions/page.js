"use client"
import React, { useState } from "react";
import { Flipper, Flipped } from "react-flip-toolkit";

export default function TermsAndConditions(){
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="w-screen h-screen justify-center bg-cover"
        style={{ backgroundImage: "url('/moneyrain.gif')" }}>
      <div className="flex justify-center items-center h-screen ">
        <Flipper flipKey={flipped}>
          <Flipped flipId="card">
            <div className="w-full max-w-xl">
              <div
                className={`bg-black shadow-md rounded-lg overflow-hidden ${
                  flipped ? "flipped" : ""
                }`}
                style={{
                  transition: "transform 0.5s",
                  transformStyle: "preserve-3d",
                  width: "100%",
                  height: "400px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className="px-6 py-4">
                  <div className="text-xl mb-2 font-bold text-gray-700 text-base">Terms & Conditions</div>
                  <div className="text-gray-700 text-base">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                      tincidunt, urna eu varius blandit, libero turpis iaculis
                      eros, eget maximus purus eros non lacus. Vivamus nec urna
                      vulputate, lobortis purus in, feugiat nunc.
                    </p>
                    {!flipped && (
                      <button
                        onClick={toggleFlip}
                        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        Read More
                      </button>
                    )}
                  </div>
                </div>
                <div className="px-6 py-4">
                  {flipped && (
                    <div>
                      <p className="text-gray-700 text-base">
                        Mauris auctor justo non libero pulvinar faucibus. Cras
                        suscipit mi sed nisi convallis, sed rhoncus libero dapibus.
                        Morbi eget ultrices orci, vel tempus justo. Integer
                        ullamcorper risus vitae orci ultricies, nec consequat neque
                        scelerisque.
                      </p>
                      <button
                        onClick={toggleFlip}
                        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        Show Less
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Flipped>
        </Flipper>
      </div>
    </div>
  );
};
