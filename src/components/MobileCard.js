import React from "react";

const MobileCard = ({ imageUrl, heading, description }) => {
  return (
    <div className="border border-gray-300 rounded-md shadow-md overflow-hidden" style={{ width: "180px", height: "280px" }}>
      <div className="flex flex-col items-center justify-center">
        <div className="">
          <img src={imageUrl} alt="Card" className="w-[120px] h-[120px] mt-[12px]" />
        </div>
        <div className="p-[10px]">
          <h2 className="text-[16px] font-poppins font-semibold mb-2">{heading}</h2>
          <p className="text-gray-600 text-[12px]">{description}</p>
        </div>
        </div>
    </div>
  );
};

export default MobileCard;
