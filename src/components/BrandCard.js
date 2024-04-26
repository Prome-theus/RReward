import React from "react";

const BrandCard = ({ brand }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={brand.images[0]} // Assuming you want to display the first image from the 'images' array
        alt={brand.brandName} // Assuming 'brandName' is the correct field for the brand's name
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{brand.brandName}</h2>
        <p className="text-gray-700">{brand.brandDescription}</p>
        <div className="flex justify-end mt-4">
          <p className="text-gray-600">Price: ${brand.brandPrice}</p>
        </div>
        <div className="flex justify-end mt-2">
          <p className="text-gray-600">End Date: {brand.brandDate}</p>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
