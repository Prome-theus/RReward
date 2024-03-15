// components/BrandCarousel.js
import React from 'react';

const BrandCarousel = ({ brandLogos }) => {
  return (
    <div className="flex justify-center gap-10  items-center">
      {brandLogos.map((logo, index) => (
        <img key={index} src={logo} alt={`Brand Logo ${index}`} className=" w-24 h-24 mx-4" />
      ))}
    </div>
  );
}

export default BrandCarousel;
