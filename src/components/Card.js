import React from "react";

const Card = ({ imageUrl, heading, description }) => {
  return (
    <div className="border border-gray-300 rounded-md shadow-md overflow-hidden" style={{ width: "700px", height: "325px" }}>
      <div className="flex">
        <div className="w-1/3">
          <img src={imageUrl} alt="Card" className="w-full h-full object-cover" />
        </div>
        <div className="w-2/3 p-4">
          <h2 className="text-xl font-semibold mb-2">{heading}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
        </div>
        <div className="mt-4 text-right flex items-center justify-center">
            <button className="px-4 py-2 mx-2 border border-zinc-500 rounded-[10px] tracking-[4px] text-white font-bold  w-full">
              Read
            </button>
      </div>
    </div>
  );
};

export default Card;
