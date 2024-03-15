import React from 'react';

const ImageTextComponent = ({ imageUrl, title, description }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-lg w-full rounded-lg overflow-hidden shadow-lg">
        <div className="flex">
          <div className="w-1/2">
            <img src={imageUrl} alt={title} className="w-full" />
          </div>
          <div className="w-1/2 bg-white p-6">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-700">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageTextComponent;
