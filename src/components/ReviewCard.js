import React from 'react';

const ReviewCard = ({ review }) => {
  if (!review) {
    return <div>Error: Review data is undefined</div>;
  }

  const { brand, category, images, productReview, productName, purchaseDate, purchasePrice, userEmail } = review || {};

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-semibold">{productName}</h2>
          <p className="text-gray-500">{category} - {brand}</p>
        </div>
        <p className="text-gray-500">{purchaseDate}</p>
      </div>
      {images && images.length > 0 && <img src={images[0]} alt={productName} className="w-full h-auto mb-4" />}
      <p className="text-gray-600 mb-4">{productReview}</p>
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold">{userEmail}</p>
          <p className="text-gray-500">{purchasePrice}</p>
        </div>
        {/* Add any additional actions/buttons if needed */}
      </div>
    </div>
  );
};

export default ReviewCard;
